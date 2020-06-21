import React from 'react';
import bgimage from '../imgs/header.jpeg';
import bgimage1 from '../imgs/pattern2.jpeg';
import bgimage2 from '../imgs/pattern3.jpeg';
import bgimage3 from '../imgs/pattern1.jpeg';

import {Jumbotron, Row, Card,Col,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

const About = (props) => {
  return (
         <div className="Container">
         
            <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} className="bg-dark text-white">
            <div className="Container">
        <h1 className="display-5 text-danger">Our Team</h1>
            </div>
        <p className="lead">This is the information about our team, We have a hardworking interns.</p>
        <hr className="my-2" />
        
      </Jumbotron>

              <Row className="text-dark">
                <Col mb={2} ml={4}>
                    <Card className="bg-dark text-white">
                        <CardImg src={bgimage1} alt=" ef" />
                        <CardBody>
                            <CardTitle>Himanshu Jindal</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!</CardText>
    
                            
                        </CardBody>
                    </Card>
                </Col>
            <Col mb={2}>
                    <Card className="bg-dark text-white">
                        <CardImg src={bgimage2} alt=""/>
                        <CardBody>
                            <CardTitle>Mudit</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!</CardText>
    
                            
                        </CardBody>
                    </Card>
                </Col>
               <Col mb={2}>
                    <Card className="bg-dark text-white">
                        <CardImg src={bgimage3} alt=""/>
                        <CardBody>
                            <CardTitle>Parul Gupta</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!</CardText>
    
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
)}

export default About;