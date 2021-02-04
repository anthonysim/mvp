const mongoose = require('mongoose');
const { Schema } = mongoose;


const Transaction = new Schema({

  payee: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  memo: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },
})


module.exports = mongoose.model('Transactions', Transaction);
