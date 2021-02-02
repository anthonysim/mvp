import React, { useEffect, useState } from "react";
import axios from 'axios';

// Components Folder
import Header from './components/Header';
import Totals from './components/Totals';
import AllTransactions from './components/AllTransactions';
import Transaction from './components/Transaction';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';


const App = () => {
  const [data, setData] = useState({ transactions: [] });


  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setData(res.data))
    // .then(res => console.log(res.data))
  }, [])


  return (
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
}

export default App;