import React from "react";
import { Form, Button } from 'react-bootstrap';


const AddExpense = () => (
  <div >
    <br />
    <Form>

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Payee</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select">
          <option>Education</option>
          <option>Gas</option>
          <option>Groceries</option>
          <option>Insurance</option>
          <option>Rent</option>
          <option>Utilties</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Memo</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>


      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Button variant="info" size="lg" block>Submit</Button>

    </Form>
  </div >
);

export default AddExpense;