import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payee: "",
      type: "Income",
      memo: "",
      amount: "",
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // notes on button click the submit handler fires
  // first it posts to the db,
  // then it fires this.post.postFunc which will get a get request to update
  // transactions to render on the page.

  onSubmitHandler(e) {
    e.preventDefault();

    let { payee, type, memo, amount } = this.state;

    axios.post('http://localhost:5000/addtransaction', {
      payee,
      type,
      memo,
      amount
    })
      .then(this.setState(prevState => {
        return {
          payee: "",
          type: "Income",
          memo: "",
          amount: "",
        }
      }))
      .then(() => this.props.postFunc())
      .catch(err => console.error(err))
  }

  render() {

    return (
      <div >
        <Form className="mt-sm-4 shadow p-3 mb-5 mt-1 bg-white rounded">

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Payee</Form.Label>
            <Form.Control
              value={this.state.payee}
              onChange={e => this.setState({ payee: e.target.value })}
              type="text" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label >Type</Form.Label>
            <Form.Control
              value={this.state.type}
              onChange={e => this.setState({ type: e.target.value })}
              as="select">
              <option>Income</option>
              <option>Expense</option>

            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Memo</Form.Label>
            <Form.Control
              value={this.state.memo}
              onChange={e => this.setState({ memo: e.target.value })}
              as="textarea" rows={1} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              value={this.state.amount}
              onChange={e => this.setState({ amount: e.target.value })}
              type="text"
            />
          </Form.Group>

          <Button onClick={this.onSubmitHandler} type="submit" variant="info" size="lg" block>Submit</Button>
        </Form>
      </div >
    );
  }
}

export default Transaction;

