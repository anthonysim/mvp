const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const budgetRoutes = require('./routes/budget.routes')
// const cors = require('cors');

// Path to DOTENV config file
dotenv.config({ path: './configs/config.env' })

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(cors())

// Routes pointing to routes folder
app.use(budgetRoutes)

// DB & Server Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`)))
  .catch(error => handleError(error))
