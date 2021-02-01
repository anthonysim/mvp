const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// Path to DOTENV config file
dotenv.config({ path: './configs/config.env' })

const app = express()

// GET Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})




// Server Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))