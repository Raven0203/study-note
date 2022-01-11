import React, { useState, useEffect } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
var temp = [];
var title;
var respone;
var jsondata;
var placename ="testplacename";
function PlanTableTest({setResault,placeid}) {
    const [data, setData] = useState([])
     console.log("LOAD")
     console.log(placeid)
     if(window.localStorage.jsondata){
        jsondata = JSON.parse(window.localStorage.jsondata)
        console.log("------------------------")
        console.log(typeof jsondata.eachDays)
        jsondata.journeydetail.eachDays[0].eachPlaces.push({"placeName":placename,"AttractionsId":placeid})
        dataparse(jsondata);
    }else{
       let josonmodel ={};
     //  console.log(josonmodel)
        josonmodel.journeydetail={}
        josonmodel.journeydetail.beginDate="2021/02/15"
        josonmodel.journeydetail.daysNum=2
        josonmodel.journeydetail.eachDays=[{}]
        josonmodel.journeydetail.eachDays[0].beginTime = "0900"
        josonmodel.journeydetail.eachDays[0].placesNum = "2"
        josonmodel.journeydetail.eachDays[0].eachPlaces=[{"placeName":placename,"AttractionsId":"ChIJsdW1Y789aTQRV4PXfiiqtnI"},];
        if(placeid!=""){
            jsondata.eachDays[0].eachPlaces.push({"placeName":placename,"AttractionsId":placeid})
        }
        
        console.log(josonmodel)
        jsondata = josonmodel;
        dataparse(jsondata);
        window.localStorage.jsondata= JSON.stringify(josonmodel);
    }
    useEffect(() => {
        //dataparse(jsondata)
        console.log("COMPLETE RENDER")
    }, [])


    function dataparse(jsondata) {
        //alert(typeof jsondata.journeydetail)
        temp = jsondata.journeydetail.eachDays[0].eachPlaces;
        // console.log("-----dataparse------")
        // console.log(temp)
        // console.log("-------------------")
        title = jsondata.journeydetail.beginDate;
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
        <table >
            <tr>
                <th><input type="date" value={title} ></input></th>
            </tr>{data.map((item) => {
                return <><tr><td><b>{item.placeName}</b></td></tr><tr>{item.distance}</tr></>
            })}</table><button onClick={setMap}>MAP</button>
    </div>)
}

export default PlanTableTest;


// {
//     "beginDate": "2021/02/15",
//         "daysNum": 2,
//             "eachDays": [
//                 {
//                     "beginTime": "0900",
//                     "placesNum": "2",
//                     "eachPlaces": [
//                         {
//                             "placeName": "臺中國家歌劇院 ",                              "AttractionsId":"ChIJcaKjTOw9aTQR4mAeJzejtdg",
//                             "note": "老闆會拿棍子扁人，要小心"
//                         },
//                         {
//                             "placeName": "國立自然科學博物館",
//                             "AttractionsId": "ChIJyzSRBng9aTQRNk-Xj7pbpvc",
//                             "note": "記得買土產"
//                         },
//                         {
//                             "placeName": "綠光計畫范特喜文創聚落",
//                             "AttractionsId": "ChIJO-oeCZ89aTQR5Y9uRU4uSEI",
//                             "note": "老闆會拿棍子扁人，要小心"
//                         },
//                         {
//                             "placeName": "國立臺灣美術館",
//                             "AttractionsId": "ChIJyVHkNqY9aTQRDilsyqDVfbg",
//                             "note": "老闆會拿棍子扁人，要小心"
//                         },
//                         {
//                             "placeName": "國美館綠園道",
//                             "AttractionsId": "ChIJW_5f_KY9aTQRlphcLmWj88I",
//                             "note": "老闆會拿棍子扁人，要小心"
//                         }


//                     ]
//                 },
//                 {
//                     "beginTime": "1400",
//                     "placesNum": "1",
//                     "eachPlaces": [{
//                         "placeName": "休息站",
//                         "stayTime": "30",
//                         "note": "上車睡覺，下車尿尿"
//                     }
//                     ]
//                 }
//             ]
// }