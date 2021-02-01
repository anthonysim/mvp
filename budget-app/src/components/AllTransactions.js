import React from "react";
import { Table } from 'react-bootstrap';


const AllTransactions = () => (
  <div>
    <Table striped bordered hover size="sm" className="mt-sm-4 shadow p-3 mb-5 mt-1 bg-white rounded">
      <thead>
        <tr>
          <th>Payee</th>
          <th>Type</th>
          <th>Memo</th>
          <th>Expense</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Landlord</td>
          <td>Expense</td>
          <th>Landlord wants 50% of paycheck.... wt 🦆?</th>
          <th>$1600.00</th>
          <th></th>
        </tr>
        <tr>
          <td>Job</td>
          <td>Income</td>
          <th>Bi-Weekly Check</th>
          <th></th>
          <th>$1500.00</th>
        </tr>
      </tbody>
    </Table>
  </div >
);

export default AllTransactions;