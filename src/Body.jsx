import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import PictureLoader from "./Components/PictureLoader";
import { ListGroup, Card } from "react-bootstrap";

const Body = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState([]);
  const [result, setResult] = useState("");

  function ChangeHandler(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(description);
    setResult(description);
    var date = new Date().toLocaleString();
    setDate(date);
  
  }

  return (
    <div className="container">
      <div className="row">
        <Form className="col-12 mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={ChangeHandler}
              value={description}
              type="text"
              placeholder="Enter description"
            />
            <Form.Text className="text-muted">
              Enter the description of the image
            </Form.Text>
          </Form.Group>

          <PictureLoader />
        </Form>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
          <ListGroup.Item><h5>Description:</h5> {description}</ListGroup.Item>
            <ListGroup.Item><h5>Date:</h5>(Click on Submit to view the date) <h5>{date}</h5></ListGroup.Item>

          </ListGroup>
        </Card>
<div>
<Button onClick={handleSubmit} className="success ml-5" variant="primary">
          Submit
        </Button>
</div>

      </div>
    </div>
  );
};

export default Body;
