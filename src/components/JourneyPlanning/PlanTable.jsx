import React, { useState, useEffect } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
var temp = [];
var title;



function PlanTable(props) {
    const [data, setData] = useState([])

    var respone;
    console.log("LOAD")

    useEffect(() => {
        FetchData();
        console.log("COMPLETE RENDER")
    }, [])
    function FetchData() {
        fetch("http://localhost:8080/journey/4")
            .then((res) => {
                return res.json();

            }).then((jsondata) => {
                dataparse(jsondata)

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
        props.setResault(respone)
        console.log("draw map")
    }
    return (<div>{
        <DirectionsService options={{
            destination: { placeId: (data.length > 0) ? data[data.length - 1].AttractionsId : null },
            origin: { placeId: (data.length > 0) ? data[0].AttractionsId : null },
            waypoints: (data.length > 0) ? makeWayPoint(data) : [{ location: null }],
            travelMode: "DRIVING"
        }}
            callback={(res) => {
                respone = res;
            }}>

        </DirectionsService>
    }
        <table >
            <tr>
                <th>{title}</th>
            </tr>{data.map((item) => {
                return <><tr><td><b>{item.placeName}</b></td></tr><tr>{item.distance}</tr></>
            })}</table><button onClick={setMap}>MAP</button>
    </div>)
}

export default PlanTable;