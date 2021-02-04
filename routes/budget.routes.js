const express = require('express')
const router = express.Router()
const { getTransactions, postTransaction, deleteTransaction } = require('../controllers/budget.controllers')


// Gets all the transactions in mongoDB
router.get('/transactions', getTransactions)

// Posts one transaction
router.post('/transaction', postTransaction)

// Deletes one transaction
router.delete('/transaction/:id', deleteTransaction)


module.exports = router;