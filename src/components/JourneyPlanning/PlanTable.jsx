import React, { useState } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
var temp = [];
var title;



function PlanTable(setR) {

    const [data, setData] = useState([])
    var respone;
    function setRespone(result) {
        respone = result;
    }
    function FetchData() {

       fetch("http://localhost:8080/journey/1")
            .then((res) => {
                return res.json();

            }).then((jsondata) => {
                console.log(jsondata);
                temp = JSON.parse(jsondata.journeydetail).eachDays[0].eachPlaces;
                title = JSON.parse(jsondata.journeydetail).beginDate
                //temp.map((item) => { console.log(item.placeName) })
                //console.log(temp[0].placeName)
                let count = 0;
                for(var i =0;i<temp.length;i++){
                    //console.log(temp[i].AttractionsId)
                   
                    if(i<temp.length-1){
                       
                        let continute = FetchDataTest(temp[i].AttractionsId,temp[i+1].AttractionsId,temp[i]);
                        continute.then(()=>{
                            count++;  
                            if(count==temp.length-1) {
                                setData(temp);
                            }                         
                            });
                            
                        
                        //var temp = await FetchDataTest(temp[i].AttractionsId,temp[i+1].AttractionsId);
                        //temp[i].distance=await FetchDataTest(temp[i].AttractionsId,temp[i+1].AttractionsId); 
                                               
                    }else{
                        temp[i].distance="";
                        
                    }
                    
                }
               
                                
                

            })
    }


    async function FetchDataTest(startID,endId,temp) {
        
        return await fetch(`/maps/api/distancematrix/json?origins=place_id:${startID}&destinations=place_id:${endId}&key=AIzaSyAyzMJTILn9Et7hkWpxfA3jyOdILF7zCig`)
            .then((res) => {
                return res.json();

            }).then((jsondata) => {
                let result={};
                result.distanceText=jsondata.rows[0].elements[0].distance.text;
                result.distanceValue=jsondata.rows[0].elements[0].distance.value;
                result.durationText=jsondata.rows[0].elements[0].duration.text;
                result.durationValue=jsondata.rows[0].elements[0].duration.value;
                // console.log(jsondata.rows[0].elements[0].distance.text)
                // console.log(jsondata.rows[0].elements[0].distance.value)
                // console.log(jsondata.rows[0].elements[0].duration.text)
                // console.log(jsondata.rows[0].elements[0].duration.value)
                // console.log(result.distanceText)
                // console.log(result.distanceValue)
                // console.log(result.durationText)
                // console.log(result.durationValue)

                //console.log("-------------")
                //alert(`距離:${result.distanceText} 時間:${result.durationText}`)
                temp.distance= `距離:${result.distanceText} 時間:${result.durationText}`;
                console.log("distance")
                return true;
            })
    }

    function makeWayPoint(data){
        let waypoit=[];
        for(let i =1;i<data.length-1;i++){
            let temp = {};
            temp.location={}
            temp.location.placeId= data[i].AttractionsId
            waypoit[i-1]=temp;
        }
        console.log(waypoit)
        return waypoit;
    }



    function setDate() {

        setR.setResault(respone)
    }
    return (<div>{
        <DirectionsService options={{
            destination: { placeId: (data.length>0)?data[data.length-1].AttractionsId :null },
            origin: { placeId: (data.length>0)?data[0].AttractionsId :null},
            waypoints: (data.length>0)?makeWayPoint(data):[{location:null}],
            travelMode: "DRIVING"
        }}
            callback={(res) => {
                console.log(123)
                console.log(res)
                setRespone(res);
            }}></DirectionsService>
    } <button onClick={FetchData}>fetch</button>
        <table >
            <tr>
                <th>{title}</th>
            </tr>{data.map((item) => {
                return <main><tr><td><b>{item.placeName}</b></td></tr><tr>{item.distance}</tr></main>
            })}</table>
        <button onClick={setDate}>dir</button></div>)
}

export default PlanTable;



