const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//import routes
const userRoutes = require('./routes/user')
//app
const app = express()
const uri =
  'mongodb+srv://SyedHasnain:hack82ri.dge@cluster0.2lrpe.mongodb.net/ecommerce?retryWrites=true&w=majority'
//mongoose
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database is connected'))
  .catch((err) => console.log('Database is diconnected'))
//routes middleware
app.use(userRoutes)
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Serve r is running on port ${port}`)
})
