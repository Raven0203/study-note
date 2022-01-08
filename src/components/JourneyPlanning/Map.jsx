import React from 'react'
import { GoogleMap, LoadScript, Marker, Autocomplete, StandaloneSearchBox } from '@react-google-maps/api';
import { margin, padding } from '@mui/system';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './map.css'
import Api from '../Practice/Backend'
import Map from '../JourneyPlanning/Mapsearch'
import BasicModal from '../JourneyPlanning/PlanTable'

const containerStyle = {

  width: '100%',
  height: '100%'
};

let center = {
  
  lat: 24.1505262,
  lng: 120.6488196
};

const position = {
  lat: 24.1505262,
  lng: 120.6488196
}

const onLoad = marker => {
  console.log('marker: ', marker)
}
/* 
const onLoad = ref => this.searchBox = ref;

const onPlacesChanged = () => console.log(this.searchBox.getPlaces()); */

/* function init() {
  navigator.geolocation.watchPosition((position) => {
      console.log(position.coords);
      center.lat = position.coords.latitude;
      center.lng = position.coords.longitude;
  });
} */

function MyComponent() {
  return (    
    <>
    
   <div className='maps'>
     
      <BasicModal />
    
      <div id='googlemaps'>
      {  <LoadScript
      googleMapsApiKey="AIzaSyAyzMJTILn9Et7hkWpxfA3jyOdILF7zCig"
    >
      <GoogleMap
        id="searchbox-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
     


        <></>
      </GoogleMap>
    </LoadScript>  }
      {/* <Map /> */}
    </div>
    </div>
  
    
    </>
  )
}

export default React.memo(MyComponent)
