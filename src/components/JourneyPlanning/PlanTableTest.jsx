import { useState, useEffect } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
import { DragHandle } from "./partials/DragHandle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { unstable_composeClasses } from '@mui/material';
import { ListItem ,DistanceItem} from "./styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { deepPurple,pink,blue } from '@mui/material/colors';
import { margin } from '@mui/system';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import { Toast } from 'react-bootstrap';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

//Toast
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


//var beginDate;
var respone;
var jsondata;
var lastplace;
var title;
let memberid =window.localStorage.memberid;//登入功能完整後 ，變成到localstorge取值 
;//指向當前天數的arrayindex
let daypointer= 0;
function PlanTableTest({setResault,place,setOpen}) {
    useEffect(()=>{
        daypointer= 0;
        localStore(jsondata);
    },[])
    const [data, setData] = useState([])
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        daypointer=newValue
        if(!jsondata.journeydetail.eachDays[daypointer]){           
          let placeobject ={};
          placeobject.eachPlaces=[];
          jsondata.journeydetail.eachDays.push(placeobject)
            
      }
    
      localStore(jsondata) 
        //console.log(newValue);
    };


     function FetchData(journeyid) {
         //get資料庫已有行程
        fetch("http://localhost:8080/journey/"+journeyid)
            .then((res) => {
               return res.json();
            }).then((jsondata) => {
                dataparse(jsondata)
                console.log(jsondata)
                window.localStorage.jsondata = JSON.stringify(jsondata)
            })
    }
    if(window.localStorage.date){
      let date = JSON.parse(window.localStorage.date)
      let josonmodel ={};
      josonmodel.journeydetail={}
      josonmodel.journeydetail.beginDate=date.beginDate
      josonmodel.journeydetail.daysNum=date.daysNum
      josonmodel.journeydetail.title=window.localStorage.title
      josonmodel.journeydetail.eachDays=[];       
      let placeobject ={};
      placeobject.eachPlaces=[];
      josonmodel.journeydetail.eachDays.push(placeobject)
      window.localStorage.removeItem("date")
      window.localStorage.removeItem("title")
      localStore(josonmodel);
    }
     if(window.localStorage.jsondata/*檢查local storge*/ ){
        jsondata = JSON.parse(window.localStorage.jsondata)
        console.log("------------------------")
        jsondata.journeydetail = JSON.parse(jsondata.journeydetail)
        if(lastplace!=place.place_id &&  place.place_id ){
            lastplace=place.place_id;
            jsondata.journeydetail.eachDays[daypointer].eachPlaces.push({"placeName":place.place_name,"AttractionsId":place.place_id})
            localStore(jsondata);
            console.log("insert")
        }       
       
    }

    let day =[];
      let beginDate = new Date(jsondata.journeydetail.beginDate)
      let daysNum = jsondata.journeydetail.daysNum
      for(let i =0;i<daysNum;i++){
         let dateObj={}
         dateObj.date = `第${i+1}天(${beginDate.toISOString().slice(0,10)})`;
         day.push(dateObj)
         beginDate.setDate(beginDate.getDate()+1)
         
      }
    
 
    console.log(day)
    function localStore(jsondata){
        jsondata.journeydetail= JSON.stringify(jsondata.journeydetail)//為了要journeybean 對照到detail是string        
        window.localStorage.jsondata= JSON.stringify(jsondata);
        dataparse(jsondata) //儲存後順道重新繪製plan table
    }

    function dataparse(jsondata) {
        
        let temp = JSON.parse(jsondata.journeydetail).eachDays[daypointer].eachPlaces; //暫存區放eachplace array
        console.log(temp)
        title = JSON.parse(jsondata.journeydetail).title;
        // beginDate = JSON.parse(jsondata.journeydetail).beginDate;
        let count = 0;
        if(temp.length<=1){
            setData(temp); //只有一個物件時繪製journetplan用
          
            setTimeout(()=>{
                setData(temp);
                setOpen(false);
            },200) 
        }else{
          setOpen(false);
        }
        for (var i = 0; i < temp.length - 1; i++) {
           
            let continute = FetchDistance(temp[i].AttractionsId, temp[i + 1].AttractionsId, temp[i]);//取陣列送資料給derection算距離
            continute.then(() => {
                count++;
                if (count == temp.length - 1) {
                    temp[temp.length-1].distance="";
                    setData(temp);                   
                    console.log("DRAW TABLE")
                }
            });
        }

    }
    async function FetchDistance(startID, endId, temp) {
        //計算距離
        return await fetch(`/maps/api/distancematrix/json?origins=place_id:${startID}&destinations=place_id:${endId}&key=AIzaSyAyzMJTILn9Et7hkWpxfA3jyOdILF7zCig`)
            .then((res) => {
                return res.json();
            }).then((jsondata) => {
                let result = {};
                let data = jsondata.rows[0].elements[0];
                result.distanceText = data.distance.text;
                result.distanceValue = data.distance.value;
                result.durationText = data.duration.text;
                result.durationValue = data.duration.value;
                temp.distance = `距離：  ${result.distanceText} \u00A0\u00A0\u00A0\u00A0 時間： ${result.durationText}`;//距離結果存回temp方便畫plan table
                return true;
            })
    }

    function makeWayPoint(data) {
        //配合directiom service 設定中間點
        let waypoit = [];
        for (let i = 1; i < data.length - 1; i++) {
            let temp = {};
            temp.location = {}
            temp.location.placeId = data[i].AttractionsId
            waypoit[i-1] = temp;
        }
        return waypoit;
    }


    function saveData() {
      /* setShowA(true); */
      setTopen(true);
      if(jsondata.journeyid){
        
        fetch("http://localhost:8080/journey/", {//update
        method: 'PUT', 
        body: window.localStorage.jsondata, 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((res )=>{  return res.json() })               
      .catch(error => console.log(error) )
      .then(response =>{
        console.log(response)
      });
      }else{
        
        fetch("http://localhost:8080/journey/memberid="+memberid, {
                method: 'POST', 
                body: window.localStorage.jsondata, 
                headers: new Headers({
                  'Content-Type': 'application/json'
                })
              }).then((res )=>{  return res.json() })
                
              .catch(error => alert(error) )
              .then(response =>{          
                FetchData(response.journeyid) //post後從資料庫拿新資料 轉換成編輯已有行程狀態
                
              });
      }


    }
    
    function deleteItem(e){ //delete event     
        jsondata = JSON.parse(window.localStorage.jsondata)
        jsondata.journeydetail = JSON.parse(jsondata.journeydetail)
        jsondata.journeydetail.eachDays[daypointer].eachPlaces.splice(parseInt(e.target.id.substr(6,1)),1);
        localStore(jsondata)
        setT2open(true);
    }

    function setMap() {
        setResault(respone)
        console.log("draw map")
    }
    // 新增主題控色
    const mdTheme = createTheme({
      status: {
        danger: '#e53e3e',
      },
      palette: {
        primary: {
          main: blue[500],
          darker: '#053e85',
        },
        secondary:{
          main: pink[400]
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        }/* ,
        usewhite: {
          main: green[50]
        } */
      },
    });

     // Toast
     /* const [showA, setShowA] = useState(false); */
   
     const [Topen, setTopen] = React.useState(false);
     const [T2open, setT2open] = React.useState(false);
   
   
     const handleTClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
       setTopen(false);
       setT2open(false)
     };
   
  
    

    return (
    <div>

      <ThemeProvider theme={mdTheme}>
     
      
      {
        <DirectionsService options={{
            destination: { placeId: (data.length > 0) ? data[data.length - 1].AttractionsId : null },
            origin: { placeId: (data.length > 0) ? data[0].AttractionsId : null },
            waypoints: (data.length > 0) ? makeWayPoint(data) : [{ location: null }],
            travelMode: "DRIVING"
        }}
            callback={(res) => {
                respone = res;
                console.log("callback")              
             }}>

        </DirectionsService>
    }
    <Typography id="modal-modal-title2" variant="h5" component="h2" align='center'>
            {title}
            <hr></hr>
          </Typography>
   
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'Highlight' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons="auto" variant='scrollable'>
                    {day.map((item, index) => {
                        return (
                            <Tab label={item.date} />
                        )
                    })}
                </Tabs>
            </Box> 
        </Box>
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;//which item drag
          const desI = param.destination?.index;//target index
          if (desI||desI===0) {
            data.splice(desI, 0, data.splice(srcI, 1)[0]);
            
            console.log(data)
            jsondata.journeydetail.eachDays[daypointer].eachPlaces= data;
            localStore(jsondata)
            //List.saveList(list);
          }
        }}
      >
          
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div ref={provided.innerRef }   style={{
                borderRadius: ' 0.3rem',
                boxShadow: '0.1rem 0.1rem 0.4rem #aaaaaa',
                background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "white",
                padding: 4,
                width: 'auto',
                minHeight: 'auto'  
            }}{...provided.droppableProps}>
                
                {data.map((item, i) => (
                    

                    <div >
                    
                  <Draggable
                    key={item.AttractionsId}
                    draggableId={"draggable-" + item.AttractionsId}
                    index={i}
                  >
                    {(provided, snapshot) => (
                        
                      <ListItem 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          borderRadius: ' 0.3rem',
                          boxShadow: '0.2rem 0.5rem 0.4rem #aaaaaa',
                          userSelect: "none",
                          padding: 8,
                          margin: "0 0 8px 0",
                          /* padding: "50 0 200 20" , */
                          minHeight: "40px",
                          backgroundColor: snapshot.isDragging
                              ? "#263B4A"
                              : "white",
                          display: 'flex',
                          justifyContent: 'space-between',

                          color: snapshot.isDragging ? "white" : "black",
                          ...provided.draggableProps.style
                      }}
                      >
                        {(snapshot.isDragging)?<>{
                        ( [].slice.call(document.getElementsByClassName("distanceItem")).map((item)=>{
                                  item.style.display="none";
                        }))}</>
                        :<>{
                        ( [].slice.call(document.getElementsByClassName("distanceItem")).map((item)=>{
                          item.style.display="";
                        }))}</>}
                        
        
                        {/* {} */}
                       {/*  <DragHandle {...provided.dragHandleProps} /> */}

                        <b>{item.placeName}</b>
                        {/* <Button id={`delbtn${i}`} variant="outlined" startIcon={<DeleteIcon />} className='delbutton' onClick={deleteItem}></Button> */}
                        <IconButton  color='error' aria-label="delete" id={`delbtn${i}`} className='delbutton' onClick={deleteItem} size='small'><DeleteIcon /></IconButton>
                        {/* <button id={`delbtn${i}`} className='delbutton' onClick={deleteItem}>刪除</button> */}
                      </ListItem>                    
                    )}   
                                   
                  </Draggable>                 
                  {(data.length>1&&item.distance)?<DistanceItem className='distanceItem'>{item.distance}</DistanceItem>:null}
                  </div>              
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </DragDropContext>
      <div style={{"display":"flex","padding":"8px"}}><div style={{"flex":"20%"}}>
      <LoadingButton
        onClick={setMap}
        endIcon={<SendIcon />}
        /* loading={loading} */
       /*  loadingPosition="end" */
        variant="contained"
        size='small'
        sx={{marginLeft:2.5,display:(!data.length  && 'none')}}
        
      >
        路線規劃  
      </LoadingButton>
      
      <LoadingButton
        color='secondary'
        onClick={saveData}
        /* loading={loading}
        loadingPosition="start" */
        endIcon={<SaveIcon />}
        variant="contained"
        size='small'
        sx={{marginLeft:2.5,display:(data.length<1?'none':'')}}
      >
        儲存
      </LoadingButton>
      

      <Snackbar open={T2open} autoHideDuration={500} onClose={handleTClose} TransitionComponent={Slide}>
        <Alert onClose={handleTClose} severity="warning" sx={{ width: '100%' }}>
          系統提示：已刪除行程
        </Alert>
      </Snackbar>
     
      <Snackbar open={Topen} autoHideDuration={1500} onClose={handleTClose} TransitionComponent={Slide}>
        <Alert onClose={handleTClose} severity="success" sx={{ width: '100%' }}>
          系統提示：您的旅程已儲存成功！
        </Alert>
      </Snackbar>
     
          {/* <Toast show={showA} onClose={() => setShowA(false)} show={showA} delay={2000} autohide>
      <Toast.Body>恭喜！您的旅程已儲存成功!</Toast.Body>
    </Toast> */}
       {/*  <button onClick={setMap}>路線規劃</button></div><div style={{"flex":"10"}}> */}
         {/*  <button onClick={saveData}>儲存</button> */}</div></div>
         </ThemeProvider>
    </div>)
}

export default PlanTableTest;

