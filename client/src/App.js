import React from "react";
import MyCarousel from "./components/carousel.component";

import { Container, Row, Button, Col } from "reactstrap";

function App() {
  return (
    <Container className="centered h-50 d-inline-block">
      <Row>
        <Col csm="12" md={{ size: 6, offset: 3 }}>
          <MyCarousel />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
