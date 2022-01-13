import React, { useState , useEffect} from 'react'
import { Marker, useJsApiLoader, useLoadScript, GoogleMap, LoadScript, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';
import { margin, padding } from '@mui/system';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlanTable from './PlanTable';
import PlanTableTest from './PlanTableTest';
import './map.css'
import { ButtonBase } from '@mui/material';

// Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




// Modal 
const containerStyle = {

  width: '100%',
  height: '100%'
};
let autocomplete = null;//自動完成的結果
let openhour = null;

function MyComponent() {
//
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSent = () => setPlace({"place_id":placedetail.place_id,"place_name":placedetail.name});
//

  const [center, setCenter] = useState({
    lat: 24.1369434,
    lng: 120.6369918
  })
  const [mark, setMark] = useState({

  })

  const [placedetail, setPlacedetail] = useState([]);
  const [placeopen, setPlaceopen] = useState([]);
  const [place, setPlace] = useState("");

  let lists = null;

  const [zoomin, setZoomin] = useState(18)//自動完成後zoomin用
  const [resault, setResault] = useState({})//direction 
  const { isLoaded, loadError } = useLoadScript({
  //  AIzaSyAyzMJTILn9Et7hkWpxfA3jyOdILF7zCig
   
    googleMapsApiKey: "AIzaSyC-PEqQflUzaDeh1SUbTI1wSS1onLCvTKY",
    libraries: ["places"]
  })

/*   useEffect(() => {
   
   if (placedetail.opening_hours != undefined){
    openhour = JSON.stringify(placedetail.opening_hours.weekday_text)
   } else {
     openhour = null;
   }
   
   }, [placedetail]) */

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }
  return isLoaded ? (
    <>

      <div className='maps'>
        <div className='plan'><PlanTable setResault={setResault} detail={placedetail} place={place}/*把方法丟給table給他取用*//></div>
        <div>
          {/* {  <LoadScript
        googleMapsApiKey="AIzaSyAyzMJTILn9Et7hkWpxfA3jyOdILF7zCig"
        libraries:["places"]
      > */}

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoomin}
          >
            <></>
            <Autocomplete
              onLoad={(auto) => { autocomplete = auto }/**/}
              onPlaceChanged={() => {
                {handleOpen()};
                console.log("------------");
                console.log(autocomplete.getPlace());
                setPlacedetail(autocomplete.getPlace());



                console.log(placedetail.opening_hours);
               /*  if(placedetail.opening_hours != undefined){
                  openhour = placedetail.opening_hours
                }else{
                  openhour = 'yo'
                } */
                
                
                console.log('openhour'+openhour);
                console.log("------------");
                
                
                setCenter(autocomplete.getPlace().geometry.location);//重新定位
                setMark(autocomplete.getPlace().geometry.location);//標記
                setZoomin(20);//拉近
            
                console.log(openhour);
              }}
            >
              <input
                type="text"
                placeholder="勞贖"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-120px"
                }}
              />
            </Autocomplete>
            
            <Marker
              position={mark}
            />
            <DirectionsRenderer
              // required
              options={{
                directions: (resault != null) ? resault : null
              }}

            />
          </GoogleMap>


          <div>
            
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop="true"
      >
        <Box sx={style}>
        <Button  /* variant="outlined" */ onClick={handleClose} style={{float: 'right'}} /* startIcon={<DeleteIcon />} */>X</Button>
       
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <a href={placedetail.url}>{placedetail.name}</a>
          </Typography>
          <Typography inline id="modal-modal-description" sx={{ mt: 2 }}>
           <b>電話</b>：{placedetail.formatted_phone_number} <br></br>
           地址：{placedetail.formatted_address} <br></br>
           {console.log(placedetail.opening_hours)}
         
           {placedetail.opening_hours==undefined?null:"開放時間： "+JSON.stringify(placedetail.opening_hours.weekday_text)} 
           
           <Button  onClick={handleSent} variant="contained" style={{marginLeft:'28%',marginTop:'10%'}}>加入行程</Button>
           {/* 三元運算 */}

          {/* test: {placeopen} */}
         {/*  test2: {placedetail.opening_hours.weekday_text[0]} */}

           
           {/* 開放時間： <br></br>
           {
           placedetail.opening_hours.weekday_text[0] 
           }<br></br>
            {
           placedetail.opening_hours.weekday_text[1] 
           }<br></br>
            {
           placedetail.opening_hours.weekday_text[2] 
           }<br></br>
            {
           placedetail.opening_hours.weekday_text[3] 
           }<br></br>
            {
           placedetail.opening_hours.weekday_text[4] 
           }<br></br>
            {
           placedetail.opening_hours.weekday_text[5] 
           }<br></br>
            {
           placedetail.opening_hours.weekday_text[6] 
           }<br></br> */}
           
          
          
          
          </Typography>
        </Box>
      </Modal>
      
      
      
      </div>



          {/* </LoadScript>  } */}
        </div>
      </div>


    </>
  ) : <div><h1>oops</h1></div>

}

export default React.memo(MyComponent)


// {
//   "address_components": [
//       {
//           "long_name": "臺北車站",
//           "short_name": "臺北車站",
//           "types": [
//               "premise"
//           ]
//       },
//       {
//           "long_name": "2",
//           "short_name": "2",
//           "types": [
//               "street_number"
//           ]
//       },
//       {
//           "long_name": "承德路一段",
//           "short_name": "承德路一段",
//           "types": [
//               "route"
//           ]
//       },
//       {
//           "long_name": "黎明里",
//           "short_name": "黎明里",
//           "types": [
//               "administrative_area_level_4",
//               "political"
//           ]
//       },
//       {
//           "long_name": "中正區",
//           "short_name": "中正區",
//           "types": [
//               "administrative_area_level_3",
//               "political"
//           ]
//       },
//       {
//           "long_name": "台北市",
//           "short_name": "台北市",
//           "types": [
//               "administrative_area_level_1",
//               "political"
//           ]
//       },
//       {
//           "long_name": "台灣",
//           "short_name": "TW",
//           "types": [
//               "country",
//               "political"
//           ]
//       },
//       {
//           "long_name": "100",
//           "short_name": "100",
//           "types": [
//               "postal_code"
//           ]
//       }
//   ],
//   "adr_address": "<span class=\"postal-code\">100</span><span class=\"country-name\">台灣</span><span class=\"region\">台北市</span><span class=\"locality\">中正區</span><span class=\"street-address\">黎明里承德路一段2號</span>臺北車站",
//   "formatted_address": "100台灣台北市中正區承德路一段2號臺北車站",
//   "geometry": {
//       "location": {
//           "lat": 25.0476133,
//           "lng": 121.5174062
//       },
//       "viewport": {
//           "south": 25.04627819999999,
//           "west": 121.51508085,
//           "north": 25.0493542,
//           "east": 121.51915905
//       }
//   },
//   "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
//   "icon_background_color": "#7B9EB0",
//   "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
//   "name": "臺北車站",
//   "photos": [
//       {
//           "height": 1200,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/104362018061328443107\">林建華</a>"
//           ],
//           "width": 1600
//       },
//       {
//           "height": 3432,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/100834829717887311866\">青老竽仔</a>"
//           ],
//           "width": 4576
//       },
//       {
//           "height": 4032,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/109084536698726696361\">chen sooty</a>"
//           ],
//           "width": 3024
//       },
//       {
//           "height": 960,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/115379758262350833842\">sun long lai</a>"
//           ],
//           "width": 720
//       },
//       {
//           "height": 2250,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/107288768146256092921\">cah eror</a>"
//           ],
//           "width": 4000
//       },
//       {
//           "height": 2268,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/105247005301969627395\">楊若蕙</a>"
//           ],
//           "width": 4032
//       },
//       {
//           "height": 4032,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/107489163263827256275\">黒木大将</a>"
//           ],
//           "width": 3024
//       },
//       {
//           "height": 2306,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/115379758262350833842\">sun long lai</a>"
//           ],
//           "width": 3284
//       },
//       {
//           "height": 2592,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/101964906264716229938\">Julie Chiang</a>"
//           ],
//           "width": 4608
//       },
//       {
//           "height": 3024,
//           "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/104362018061328443107\">林建華</a>"
//           ],
//           "width": 4032
//       }
//   ],
//   "place_id": "ChIJUZ-WfXKpQjQR0j4ggToD89A",
//   "reference": "ChIJUZ-WfXKpQjQR0j4ggToD89A",
//   "types": [
//       "premise"
//   ],
//   "url": "https://maps.google.com/?q=%E8%87%BA%E5%8C%97%E8%BB%8A%E7%AB%99&ftid=0x3442a9727d969f51:0xd0f3033a81203ed2",
//   "utc_offset": 480,
//   "html_attributions": [],
//   "utc_offset_minutes": 480
// }
