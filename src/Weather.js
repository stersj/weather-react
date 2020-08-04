import React from "react";
import Main from "./main";
import Forecast from "./forecast";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./Weather.css";

export default function Weather() {
  return (
    <Container className="Container">
      <h1> SparkVejr.</h1>
      <Form>
        <Row>
          <Col sm={9}>
            {" "}
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  className="searchbar"
                  type="search"
                  placeholder="Type a city..."
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={1}>
            {" "}
            <Button
              variant="primary"
              type="submit"
              id="search-button"
              value="Search"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <Main />
      <Forecast />
    </Container>
  );
}
