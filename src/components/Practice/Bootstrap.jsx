import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { render } from 'react-dom';


const bootstrap = () => { 
      return (
        <Container style={{backgroundColor:'gray'}}>
        <Row>
          <Col sm={5}>sm=8</Col>
          <Col sm={5}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
      );
    }
  

  export default bootstrap; 