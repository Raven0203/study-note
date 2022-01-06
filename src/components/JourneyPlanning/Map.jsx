import React from 'react'
import { GoogleMap, LoadScript, Marker, Autocomplete, StandaloneSearchBox } from '@react-google-maps/api';
import { margin, padding } from '@mui/system';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './map.css'
import App from '../Practice/Backend'
import Map from '../JourneyPlanning/Mapsearch'

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

const onLoad2 = ref => this.searchBox = ref;

const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

/* function init() {
  navigator.geolocation.watchPosition((position) => {
      console.log(position.coords);
      center.lat = position.coords.latitude;
      center.lng = position.coords.longitude;
  });
} */


const Footer = () => {
  return (
    <Container>
    <Row>
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
    </Row>
  </Container>
      /* <div>
              <div className="container">
                  <div className="row">
                      <div className="col">
                        test
                      </div>
                      <div className="col">
                        test2
                      </div>
                  </div>
              </div>
      </div>  */
  );
}



function MyComponent() {
  return (    
    <>
    
   <div className='maps'>
     
      <App />
    
      <div>
      {  <LoadScript
      googleMapsApiKey="AIzaSyAyzMJTILn9Et7hkWpxfA3jyOdILF7zCig"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
      onLoad={onLoad}
      position={position}
      />

<StandaloneSearchBox
      onLoad={onLoad2}
      onPlacesChanged={
        onPlacesChanged
      }
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
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
    </StandaloneSearchBox>


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
