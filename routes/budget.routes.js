const express = require('express')
const router = express.Router()
const { allTransactions, postTransaction, deleteTransaction } = require('../controllers/budget.controllers')


router.get('/', allTransactions)
router.post('/addtransaction', postTransaction)
router.post('/deletetransaction', deleteTransaction)


module.exports = router;