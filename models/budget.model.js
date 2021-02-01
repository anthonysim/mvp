const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Budget = new Schema({
  Payee: {
    type: String
  },

  Type: {
    type: String
  },

  Memo: {
    type: String
  },

  Income: {
    type: Number
  },

  Expense: {
    type: Number
  },
})

module.exports = mongoose.model('Budget', Budget);
