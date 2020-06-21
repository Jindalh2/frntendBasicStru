import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormBar = (props) => {
  return (
    <div className="bg-dark text-white">
    <div className="container m-0 mb-0">
    <div className="text-danger">
    <h1>Contact Us</h1>
    </div>
    <Form className="text-white">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="Email" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="name" id="Name" placeholder="Name" />
          </FormGroup>
        </Col>
      </Row>
      <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
      
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="City"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" placeholder="State"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="ContactNo">Phone</Label>
            <Input type="text" name="contact" id="contact" placeholder="Phone"/>
          </FormGroup>  
        </Col>
      </Row>
      
      <Button>Send</Button>
    </Form>
    </div>
    </div>
  );
}

export default FormBar;