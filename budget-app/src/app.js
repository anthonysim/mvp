import React from "react";

// Components Folder
import Header from './components/Header';
import Totals from './components/Totals';
import AllTransactions from './components/AllTransactions';
import Transaction from './components/Transaction';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';


const App = () => (
  <div className="container text-center">
    <Header />
    <Container>
      <Row>
        <Col><Totals /></Col>
        <Col sm={8}><Transaction /></Col>
      </Row>
    </Container>
    <AllTransactions />
  </div >
);

export default App;