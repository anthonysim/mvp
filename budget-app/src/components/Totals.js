import React from "react";
import { Card, ListGroup } from 'react-bootstrap';


const Totals = ({ data }) => {
  const income = data.filter(({ type }) => type === 'Income').reduce((acc, val) => acc + val.amount, 0)
  const expense = data.filter(({ type }) => type === 'Expense').reduce((acc, val) => acc + val.amount, 0)
  const balance = (income - expense) < 0 ? ('-$' + `${(expense - income).toFixed(2)}`) : ('$' + `${(income - expense).toFixed(2)}`)
  // console.log(income)
  // console.log(expense)
  // console.log(balance)
  return (
    < div >
      <br />
      <br />
      <Card className="shadow p-3 mb-5 mt-1 bg-white rounded" style={{ width: '18rem' }}>
        <ListGroup variant="flush">

          {/* Total Balance */}
          <h4 className="text-info">Balance</h4>
          <ListGroup.Item ><h3 className="text-primary">{balance}</h3></ListGroup.Item>

          {/* Total Income */}
          <h4 className="mt-3 text-info">Income</h4>
          <ListGroup.Item ><h3 className="text-secondary">${income.toFixed(2)}</h3></ListGroup.Item>

          {/* Total Expense */}
          <h4 className="mt-3 text-info">Expense</h4>
          <ListGroup.Item><h3 className="text-danger">-${expense.toFixed(2)}</h3></ListGroup.Item>

        </ListGroup>
      </Card>
    </div >
  );
}

export default Totals;