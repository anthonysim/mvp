import React, { Component } from "react";
import axios from 'axios';

// Components Folder
import Header from './components/Header';
import Totals from './components/Totals';
import AllTransactions from './components/AllTransactions';
import Transaction from './components/Transaction';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/')
      .then(res => this.setState(prevState => {
        return {
          isLoading: false,
          transactions: res.data
        }
      }))
  }

  render() {
    return (
      < div className="container text-center" >
        <Header />
        <Container>
          <Row>
            {/* Summary of Balance, Income, and Expense */}
            <Col><Totals data={this.state.transactions} /></Col>
            <Col sm={8}><Transaction /></Col>
          </Row>
        </Container>
        {/* List f all transactions below */}
        <AllTransactions items={this.state.transactions} />
      </div >
    );
  }
}

export default App;