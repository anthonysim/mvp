import React from "react";
import { Card, ListGroup } from 'react-bootstrap';


const Totals = () => (
  <div >
    <br />
    <br />
    <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>

      <ListGroup variant="flush">
        <h4 className="text-info">Balance</h4>
        <ListGroup.Item ><h2 className="text-primary">$0.00</h2></ListGroup.Item>
        <h4 className="mt-3">Income</h4>
        <ListGroup.Item ><h2 className="text-muted">$0.00</h2></ListGroup.Item>

        <h4 className="mt-3">Expense</h4>
        <ListGroup.Item><h2 className="text-danger">$0.00</h2></ListGroup.Item>
      </ListGroup>
    </Card>
    {/* use for expense listings */}
    {/* <div class="shadow p-3 mb-5 bg-white rounded">$0.00</div>
    <div class="shadow p-3 mb-5 bg-white rounded">$0.00</div> */}
  </div >
);

export default Totals;