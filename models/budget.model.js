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

  Inflow: {
    type: Number
  },

  Outflow: {
    type: Number
  },
})

module.exports = mongoose.model('Budget', Budget);
