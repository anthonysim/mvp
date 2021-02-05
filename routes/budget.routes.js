const express = require('express')
const router = express.Router()
const { getTransactions, postTransaction, deleteTransaction, updateTransaction } = require('../controllers/budget.controllers')


// Gets all the transactions in mongoDB
router.get('/transactions', getTransactions)

// Posts one transaction
router.post('/transaction', postTransaction)

// Deletes one transaction
router.delete('/transaction/:id', deleteTransaction)


// Updates one transaction
//put updates, patch replaces
router.put('/transaction/', updateTransaction)


module.exports = router;