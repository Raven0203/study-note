import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { margin, padding } from '@mui/system';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './map.css'

const containerStyle = {

  width: '100%',
  height: '100%'
};

let center = {
  
  lat: 24.1505262,
  lng: 120.6488196
};

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
      <div></div>
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
        <></>
      </GoogleMap>
    </LoadScript>  }
    </div>
    </div>
  
    
    </>
  )
}

export default React.memo(MyComponent)
