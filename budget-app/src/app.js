import React from "react";

// Components Folder
import Header from './components/Header';
import Balance from './components/Balance';
import Totals from './components/Totals';
import Transactions from './components/Transactions';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';


const App = () => (
  <div class="container text-center">
    <Header />
    <Container>
      <Row>
        <Col>TESTING</Col>
      </Row>
    </Container>

    <Totals />
    <Transactions />
  </div >
);

export default App;