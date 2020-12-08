import React from "react";

import { Form, Button } from "react-bootstrap";


const Body = () => {
  return (
    <div className="container">
      <div className="row">
        <Form className="col-12 mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control  type="text" placeholder="Enter description" />
            <Form.Text className="text-muted">
             Enter the description of the image
            </Form.Text>
          </Form.Group>

          
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
   {Date()}
    </div>
  );
};

export default Body;
