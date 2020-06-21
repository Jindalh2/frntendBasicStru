import React from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';
import Background from '../imgs/education.jpg';


const Home = (props) => {
	var sectionStyle = {
  width: "100%",
  height: "100%",
  margin:"0",
  backgroundColor: "#FFFFFF",
  backgroundImage: `url(${Background})`,
};
   var  newStyle ={
   	backgroundColor: "#FFFFFF",
   };

  return ( 

     <div className="bg-dark">
     <Row>
     <Col md={6}>
      <Jumbotron className="bg-dark text-white" style={newStyle}>
        <h1 className="display-3 text-danger">Where Work Happens</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>Multiple CTAs direct visitors to either find a car to buy or to sell their used car. Clean and simple. The hero image is clearly custom because you can see the CarMax logo on the vehicle’s license plate.</p>
        
      </Jumbotron>
      </Col>
     <Col md={6}>
       <section style={ sectionStyle }>
      </section>
      </Col>
      </Row> 
    </div>

   

   )
}

export default Home;