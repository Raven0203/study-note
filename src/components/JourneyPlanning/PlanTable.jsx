import React, { useState , useEffect} from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
import Item from './Item'
import List from './List'
import { v4 } from "uuid";

var temp = [];
var title;

function PlanTable(setR) {
    const detail = setR.detail;
   /*  const place_id = setR.set_Placeid
    console.log(setR.place_id); */
 /*    console.log(place_id); */
    const [data, setData] = useState([])

    var respone;
    function setRespone(result){
        respone = result;
    }
    function FetchData() {

        fetch("http://localhost:8080/journey/1")
            .then((res) => {
                return res.json();

            }).then((jsondata) => {               
                temp = JSON.parse(jsondata.journeydetail).eachDays[0].eachPlaces;
                title = JSON.parse(jsondata.journeydetail).beginDate
                temp.map((item) => { console.log(item.placeName) })
                console.log(temp[0].placeName)
                setData(temp);
            })
    }
    
    function setDate() {
        setR.setResault(respone)
    }


  /*   function addItem() {
       
        add(function (prevData) {
          return [       
            {
              id: v4()
            
            },
            ...prevData,
          ];
        });
      } */
/* 
    const [test,setTest] = useState([]);
    
    function btck() {
        setTest([1,2,3]);
    } */

    var testarray = ['Arraytest'];
    useEffect(() => {
        
        testarray.push(setR.place_id);
        console.log(testarray);
        /* return () => {
            cleanup
        } */
    }, [setR.place_id])
    /* function joadd() {
        setR.set_Placeid(function(prevData) {
            return
            [   ...prevData,
                place_id
            ]
        })
    } */
     return (<div>
         
         {/* <button onClick={joadd}>測試資料</button>
         <List Listtest={test} detail={setR.placedetail} place_id={setR.placeid}></List> */}
         <h5>{testarray}</h5>
        {/*  <h5>{detail.name}</h5>
         <h5>1.{setR.place_id}</h5> */}
        
         {/* <h5>{detail.geometry}</h5> */}
         {
        <DirectionsService options={{           
            destination:  {  lat: 24.1369434, lng: 120.6369918  },
            origin: { lat: 24.1384704, lng: 120.6410738 },
            waypoints: [{ location:{ lat: 24.1349434, lng: 120.6369918 }, stopover: true }, { location: {   lat: 24.1329434, lng: 120.636991}, stopover: true }],
            travelMode: "DRIVING"
        }}
            callback={(res) => {
                console.log(123)
                console.log(res)
                setRespone(res);
            }}></DirectionsService>
        } <button onClick={FetchData}>fetch</button><table ><tr><th>{title}</th></tr>{data.map((item) => { return <main><tr><td><b>{item.placeName}</b></td><td><button>移除</button></td></tr><tr>| 行車時間</tr></main> })}</table><button onClick={setDate}>dir</button></div>)
}

export default PlanTable;