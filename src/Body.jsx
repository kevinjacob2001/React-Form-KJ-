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
    setResult(description);
    var date = new Date().toLocaleString();
    setDate(date);
  }

  return (
    <div className="container">
      <div className="row">
          <h1 className="mx-auto mt-3">Enter the information!</h1>
        <Form className="col-12 mt-3">
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
            <ListGroup.Item>
              <h5>Description:</h5> {description}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Date:</h5>(Click on Submit to view the date) <h5>{date}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <div></div>
      </div>
      <Button
        onClick={handleSubmit}
        style={{ width: "60%" }}
        className="success m-4"
        variant="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default Body;
