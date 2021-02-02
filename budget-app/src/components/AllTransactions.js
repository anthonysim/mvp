import React from "react";
import { Table } from 'react-bootstrap';


const AllTransactions = ({ items }) => {

  let transactions = items.map(({ payee, type, memo, amount }) => {
    if (type === 'Expense') {
      return <tr><th>{payee}</th><th>{type}</th><th>{memo}</th><th>${amount}</th><th></th></tr>

    } else {
      return <tr><th>{payee}</th><th>{type}</th><th>{memo}</th><th></th><th>${amount}</th></tr>
    }
  })

  return (
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
          {transactions}
          {/* <tr>
            <td>Landlord</td>
            <td>Expense</td>
            <th>Landlord wants 50% of paycheck.... wt 🦆?</th>
            <th>$1600.00</th>
            <th></th>
          </tr> */}
        </tbody>
      </Table>
    </div >
  );
}

export default AllTransactions;