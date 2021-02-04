// import model
const Tranasaction = require('../models/budget.model')


// gets all transactions
exports.getTransactions = (req, res) => {
  Tranasaction.find({})
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
  const transaction = new Tranasaction({ reactKey, payee, type, memo, amount });

  if (!transaction.amount) {
    res.json({ message: 'Please use numbers for amount field!' })

  } else {
    transaction.save(transaction)
    console.log(transaction)
    res.end()
  }
}

exports.deleteTransaction = (req, res) => {
  let { mapID } = req.body;
  // console.log(mapID)

  Tranasaction.deleteOne({ reactKey: mapID })
    .then(deletedItem => res.json(deletedItem))
    .catch(err => console.error(err))

  res.end();
}