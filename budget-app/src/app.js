import React from "react";

// Components Folder
import Header from './components/Header';
import Balance from './components/Balance';
import Totals from './components/Totals';
import Transactions from './components/Transactions';
import AddExpense from './components/AddExpense';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';




const App = () => (
  <div class="container text-center">
    <Header />
    <Container>
      <Row>
        <Col><Totals /></Col>
        <Col sm={8}><AddExpense /></Col>
      </Row>
    </Container>
    <Transactions />
  </div >
);

export default App;