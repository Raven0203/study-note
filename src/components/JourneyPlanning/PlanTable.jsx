import React, { useState } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
var temp = [];
var title;



function PlanTable(setR) {

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
     return (<div>{
        <DirectionsService options={{           
            destination: {  lat: 24.1369434, lng: 120.6369918  },
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