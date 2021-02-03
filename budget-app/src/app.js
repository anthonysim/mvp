import React, { Component } from "react";
import axios from 'axios';

// Components Folder
import Header from './components/Header';
import Totals from './components/Totals';
import AllTransactions from './components/AllTransactions';
import Transaction from './components/Transaction';

// Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    }

    this.transactionsHandler = this.transactionsHandler.bind(this);
  }

  // the bug for componentDidMount could not be fixed?!?!?
  // componentDidMount() {
  //   axios.get('http://localhost:5000/')
  //     .then(res => this.setState(prevState => {
  //       return {
  //         transactions: res.data
  //       }
  //     }))
  //     .catch(err => console.log(err))
  // }

  transactionsHandler() {
    axios.get('http://localhost:5000/')
      .then(res => this.setState(prevState => {
        return {
          transactions: res.data
        }
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      < div className="container text-center" >
        <Header />
        <Button onClick={this.transactionsHandler} className="my-2" variant="outline-info" size="lg">Transactions</Button>
        <Container>
          <Row>
            {/* Summary of Balance, Income, and Expense */}
            <Col><Totals data={this.state.transactions} /></Col>
            <Col sm={8}><Transaction postFunc={this.transactionsHandler} /></Col>
          </Row>
        </Container>
        {/* List f all transactions below */}
        <AllTransactions items={this.state.transactions} />
      </div >
    );
  }
}

export default App;