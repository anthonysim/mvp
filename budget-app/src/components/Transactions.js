import React from "react";
import { Table } from 'react-bootstrap';


const Transactions = () => (
  <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Category</th>
          <th>Memo</th>
          <th>Outflow</th>
          <th>Inflow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <th>I spend too much money</th>
          <th>$50.00</th>
          <th>$100.00</th>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <th>I spend too much money</th>
          <th>$50.00</th>
          <th>$100.00</th>
        </tr>
      </tbody>
    </Table>
  </div >
);

export default Transactions;