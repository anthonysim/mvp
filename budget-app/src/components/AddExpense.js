import React from "react";
import { Form, Button } from 'react-bootstrap';


const AddExpense = () => (
  <div >
    <br />
    <Form>
      {/* not enough time to add */}
      {/* <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group> */}

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Payee</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Type</Form.Label>
        <Form.Control as="select">
          <option>Income</option>
          <option>Expense</option>

        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Memo</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="info" size="lg" block>Submit</Button>

    </Form>
  </div >
);

export default AddExpense;