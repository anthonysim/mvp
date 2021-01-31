import React from "react";
import { Card, ListGroup } from 'react-bootstrap';


const Totals = () => (
  <div >
    <br />
    <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <ListGroup variant="flush">

        <h4 className="text-info">Balance</h4>
        <ListGroup.Item ><h3 className="text-secondary">$0.00</h3></ListGroup.Item>

        <h4 className="mt-3 text-info">Income</h4>
        <ListGroup.Item ><h3 className="text-secondary">$0.00</h3></ListGroup.Item>

        <h4 className="mt-3 text-secondary">Expense</h4>
        <ListGroup.Item><h3 className="text-danger">$0.00</h3></ListGroup.Item>

      </ListGroup>
    </Card>
  </div >
);

export default Totals;