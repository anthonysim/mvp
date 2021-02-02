const express = require('express')
const router = express.Router()
const { allTransactions, postTransaction } = require('../controllers/budget.controllers')


router.get('/', allTransactions)
router.post('/addtransaction', postTransaction)


module.exports = router;