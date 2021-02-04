const express = require('express')
const router = express.Router()
const { getTransactions, postTransaction, deleteTransaction } = require('../controllers/budget.controllers')

// update route names to make more sense!

// call this /transactions
router.get('/transactions', getTransactions)
// call this transaction
router.post('/transaction', postTransaction)

// this should be a router.delete and /transaction/:id
router.post('/deletetransaction', deleteTransaction)


module.exports = router;