import React from "react";
import { Table, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/Md';


const AllTransactions = ({ items }) => {

  function updateHandler(e) {
    e.preventDefault();
    console.log('updated!')
  }



  function deleteHandler(id) {
    // e.preventDefault();
    console.log(id)
  }



  let transactions = items.map(({ reactKey, payee, type, memo, amount }) => {

    if (type === 'Expense') {
      return <tr key={reactKey}><td>{payee}</td><td>{type}</td><td>{memo}</td><td>${amount.toFixed(2)}</td><td></td><td><Button onClick={updateHandler} variant="outline-info" size="sm">Update</Button></td>
        <td><Button onClick={() => deleteHandler(reactKey)} variant="outline-danger" size="sm">Delete</Button></td></tr>

    } else {
      return <tr key={reactKey}><td>{payee}</td><td>{type}</td><td>{memo}</td><td></td><td>${amount.toFixed(2)}</td><td><Button onClick={updateHandler} variant="outline-info" size="sm">Update</Button></td>
        <td><Button onClick={() => deleteHandler(reactKey)} variant="outline-danger" size="sm">Delete</Button></td></tr>
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
            <th><MdUpdate /></th>
            <th><FaTrashAlt /></th>
          </tr>
        </thead>
        <tbody>
          {transactions}
        </tbody>
      </Table>
    </div >
  );
}

export default AllTransactions;