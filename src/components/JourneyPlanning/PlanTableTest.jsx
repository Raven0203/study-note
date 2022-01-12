import React, { useState, useEffect } from 'react';
import { DirectionsService, LoadScript } from '@react-google-maps/api';
var temp = [];
var title;
var respone;
var jsondata;
function PlanTableTest({setResault,place}) {
    const [data, setData] = useState([])
     console.log("LOAD")
     if(window.localStorage.jsondata){
        jsondata = JSON.parse(window.localStorage.jsondata)
        console.log("------------------------")
        jsondata.journeydetail = JSON.parse(jsondata.journeydetail)
        let insert=true;
        for(let i =0;i<jsondata.journeydetail.eachDays[0].eachPlaces.length;i++){
            
             if(jsondata.journeydetail.eachDays[0].eachPlaces[i].AttractionsId==place.place_id){
                insert=false;
                break;
                            }
        }
        if(insert &&  place.place_id){
            jsondata.journeydetail.eachDays[0].eachPlaces.push({"placeName":place.place_name,"AttractionsId":place.place_id})
            jsondata.journeydetail= JSON.stringify(jsondata.journeydetail)
            window.localStorage.jsondata= JSON.stringify(jsondata);
            dataparse(jsondata)
 

        }       
       
    }else{
       let josonmodel ={};
     //  console.log(josonmodel)
        josonmodel.journeydetail={}
        josonmodel.journeydetail.beginDate="2021/02/15"
        josonmodel.journeydetail.daysNum=2
        josonmodel.journeydetail.eachDays=[];
       
        let placeobject ={};
        placeobject.beginTime = "0900"
        placeobject.placesNum = "2"
        placeobject.eachPlaces=[];
        //placeobject.eachPlaces.push({"placeName":place.name,"AttractionsId":"123"})
        josonmodel.journeydetail.eachDays.push(placeobject)
        josonmodel.journeydetail= JSON.stringify(josonmodel.journeydetail)
        // if(placeobject!=={}){
        //     alert(123)
        //     josonmodel.journeydetail.eachDays.push(placeobject)
        // }

        //jsondata = josonmodel;
        //dataparse(jsondata);
        window.localStorage.jsondata= JSON.stringify(josonmodel);
    }
    useEffect(()=>{
        //dataparse(jsondata)
    },[])
    


    function dataparse(jsondata) {
        //alert(typeof jsondata.journeydetail.eachDays[0])
        //temp = jsondata.journeydetail.eachDays[0].eachPlaces;
        console.log("-----dataparse------")
        console.log(temp)
        console.log("-------------------")
        //title = jsondata.journeydetail.beginDate;
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
    function saveData() {
        fetch("http://localhost:8080/journey/2", {
            method: 'POST', 
            body: window.localStorage.jsondata, 
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then((res )=>{console.log(res)})
          .catch(error => alert(error) )
          .then(response => alert('Success:', response));
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
            })}</table><button onClick={setMap}>MAP</button><br/><button onClick={saveData}>儲存</button>
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