import React from 'react';
import Background from '../imgs/pattern1.jpeg'
import {Row,Col} from 'reactstrap'


const Blogs = (props) => {
 
   var  newStyle ={
   	backgroundImage: `url(${Background})`,
   	width: "100%",
  height: "100%",
  margin:"0",
  backgroundColor: "#FFFFFF",
   };
  return (
  	
   <div className="bg-dark text-white ">
      <h4 className="text-danger">Whats New</h4>
      <Row>
      <Col md={6}>
     <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!</p></Col>
      <Col md={6}>
      <div style={newStyle}>
      </div> 
      </Col>      
      </Row>
      <h4 className="text-danger">Welcome To New </h4>     
      <Row>
      <Col md={6}>
     <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!</p></Col>
      <Col md={6}>
      <div style={newStyle}>

      </div> 
      </Col>      
      </Row>                   
        <h4 className="text-danger">About Yesterday</h4>
      <Row>
      <Col md={6}>
     <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                Veniam, dolorum facere?
                                Commodi, ut. Et, itaque quam!</p></Col>
      <Col md={6}>
      <div style={newStyle}>
       
      </div> 
      </Col>
      </Row>      
     </div>

   )
}

export default Blogs;