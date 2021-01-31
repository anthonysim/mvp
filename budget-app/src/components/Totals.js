import React from "react";
import { Card, ListGroup } from 'react-bootstrap';


const Totals = () => (
  <div >
    <br />
    <br />
    <Card className="shadow p-3 mb-5 mt-1 bg-white rounded" style={{ width: '18rem' }}>
      <ListGroup variant="flush">

        <h4 className="text-info">Balance</h4>
        <ListGroup.Item ><h3 className="text-primary">$0.00</h3></ListGroup.Item>

        <h4 className="mt-3 text-info">Income</h4>
        <ListGroup.Item ><h3 className="text-success">$0.00</h3></ListGroup.Item>

        <h4 className="mt-3 text-info">Expense</h4>
        <ListGroup.Item><h3 className="text-danger">$0.00</h3></ListGroup.Item>

      </ListGroup>
    </Card>
  </div >
);

export default Totals;