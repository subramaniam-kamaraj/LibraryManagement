import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Bookentry from "./Bookentry";
import Tablelist from "./Tablelist";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Bookentry />
        </Col>

        <Col>
          <Tablelist />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
