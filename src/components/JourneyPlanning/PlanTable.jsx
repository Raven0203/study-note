import React, { useState, useEffect } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
var temp = [];
var title;
var respone;


function PlanTable({setResault,placeid}) {
    const [data, setData] = useState([])

     console.log("LOAD")
     console.log(placeid)
    useEffect(() => {
        FetchData();       
        console.log("COMPLETE RENDER")
    }, [])
    
    function FetchData() {
        fetch("http://localhost:8080/journey/9")
            .then((res) => {
                return res.json();

            }).then((jsondata) => {
                // dataparse({"journeydetail":{
                //     "beginDate": "2021/02/15",
                //     "daysNum": 2,
                //     "eachDays": [
                //         {
                //             "beginTime": "0900",
                //             "placesNum": "2",
                //             "eachPlaces": [
                //                 {
                //                     "placeName": "testplacename",
                //                     "AttractionsId": "ChIJsdW1Y789aTQRV4PXfiiqtnI"
                //                 },
                //                 {
                //                     "placeName": "testplacename",
                //                     "AttractionsId": "ChIJZ7DDK8k9aTQRfvlfb8wlUl4"

                //                 }
                //             ]
                //         }
                //     ]
                // }})

                dataparse(jsondata)
                console.log(jsondata)
            })
    }

    function dataparse(jsondata) {
        temp = JSON.parse(jsondata.journeydetail).eachDays[0].eachPlaces;
        title = JSON.parse(jsondata.journeydetail).beginDate;
        let count = 0;
        for (var i = 0; i < temp.length - 1; i++) {
            let continute = FetchDistance(temp[i].AttractionsId, temp[i + 1].AttractionsId, temp[i]);
            continute.then(() => {
                
                count++;
                if (count == temp.length - 1) {
                    setData(temp);
                    console.log("DRAW TABLE")
                }
            });
        }
        temp[temp.length - 1].distance = "";
    }
    async function FetchDistance(startID, endId, temp) {
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
                temp.distance = `距離:${result.distanceText} 時間:${result.durationText}`;
                return true;
            })
    }

    function makeWayPoint(data) {
        let waypoit = [];
        for (let i = 1; i < data.length - 1; i++) {
            let temp = {};
            temp.location = {}
            temp.location.placeId = data[i].AttractionsId
            waypoit[i-1] = temp;
        }
        console.log(waypoit);
        return waypoit;
    }



    function setMap() {
        setResault(respone)
        console.log("draw map")
    }
    return (<div>{
        <DirectionsService options={{
            destination: { placeId: (data.length > 1) ? data[data.length - 1].AttractionsId : null },
            origin: { placeId: (data.length > 1) ? data[0].AttractionsId : null },
            waypoints: (data.length > 1) ? makeWayPoint(data) : [{ location: null }],
            travelMode: "DRIVING"
        }}
            callback={(res) => {
                respone = res;
                console.log("callback")              
             }}>

        </DirectionsService>
    }
        <table >
            <tr>
                <th><input type="date" value={title}></input></th>
            </tr>{data.map((item) => {
                return <><tr><td><b>{item.placeName}</b></td></tr><tr>{item.distance}</tr></>
            })}</table><button onClick={setMap}>MAP</button>
    </div>)
}

export default PlanTable;