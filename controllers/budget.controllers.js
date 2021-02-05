// import model
const Transaction = require('../models/budget.model')


// gets all transactions
exports.getTransactions = (req, res) => {
  Transaction.find({})
    .then(data => res.json(data))
    .catch(err => console.error(err))
}


// posts one transaction
exports.postTransaction = (req, res) => {
  const { payee, type, memo, amount } = req.body;

  if (!payee || !type || !memo || !amount) {
    res.json({ message: 'Please make sure all fields are filled in!' })
    return;
  }

  const reactKey = Date.now();
  const transaction = new Transaction({ reactKey, payee, type, memo, amount });

  if (!transaction.amount) {
    res.json({ message: 'Please use numbers for amount field!' })

  } else {
    transaction.save(transaction)
    console.log(transaction)
    res.end()
  }
}

exports.deleteTransaction = (req, res) => {
  const { id } = req.params;

  Transaction.deleteOne({ reactKey: id })
    .catch(err => console.error(err))

  res.end();
}

exports.updateTransaction = (req, res) => {
  console.log(req.body)

  // const { id } = req.params;

  // console.log(id)

  // Transaction.updateOne({ reactKey: id }, { amount: 10.50 })
  //   .catch(err => console.log(err))

  res.end();
}