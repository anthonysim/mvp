import React from "react";
import { Table } from 'react-bootstrap';


const Transactions = () => (
  <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Payee</th>
          <th>Category</th>
          <th>Memo</th>
          <th>Outflow</th>
          <th>Inflow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Landlord</td>
          <td>Rent</td>
          <th>Landord wants >50% of paycheck.... wt 🦆?</th>
          <th>$1,600.00</th>
          <th></th>
        </tr>
        <tr>
          <td>Job</td>
          <td>Paycheck</td>
          <th></th>
          <th></th>
          <th>$1500.00</th>
        </tr>
      </tbody>
    </Table>
  </div >
);

export default Transactions;