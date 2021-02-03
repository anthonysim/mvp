import React from "react";
import { Table, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/Md';


const AllTransactions = ({ items }) => {
  // console.log(items)
  let transactions = items.map(({ payee, type, memo, amount }) => {
    if (type === 'Expense') {
      return <tr><th>{payee}</th><th>{type}</th><th>{memo}</th><th>${amount.toFixed(2)}</th><th></th><th><Button variant="outline-info" size="sm">Update</Button></th>
        <th><Button variant="outline-danger" size="sm">Delete</Button></th></tr>

    } else {
      return <tr><th>{payee}</th><th>{type}</th><th>{memo}</th><th></th><th>${amount.toFixed(2)}</th><th><Button variant="outline-info" size="sm">Update</Button></th>
        <th><Button variant="outline-danger" size="sm">Delete</Button></th></tr>
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
            <th><MdUpdate className="text-info" /></th>
            <th><FaTrashAlt className="text-danger" /></th>
          </tr>
        </thead>
        <tbody>
          {transactions}
          <tr>
            <td>Landlord</td>
            <td>Expense</td>
            <th>Landlord wants 50% of paycheck.... wt 🦆?</th>
            <th>$1600.00</th>
            <th></th>
            <th><Button variant="outline-info" size="sm">Update</Button></th>
            <th><Button variant="outline-danger" size="sm">Delete</Button></th>
          </tr>
        </tbody>
      </Table>
    </div >
  );
}

export default AllTransactions;