// import model
const Tranasaction = require('../models/budget.model')


// gets all transactions
exports.allTransactions = (req, res) => {
  Tranasaction.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {

      res.json(data);
    }
  });
}


// posts one transaction
exports.postTransaction = (req, res) => {
  const { payee, type, memo, amount } = req.body;

  if (!payee || !type || !memo || !amount) {
    res.json({ message: 'Please make sure all fields are filled in!' })
    return;
  }

  const transaction = new Tranasaction({ payee, type, memo, amount });

  if (!transaction.amount) {
    res.json({ message: 'Please use numbers for amount field!' })

  } else {
    transaction.save(transaction)
    console.log(transaction)
    res.end()
  }
}

