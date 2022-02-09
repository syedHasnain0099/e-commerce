const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//import routes
const userRoutes = require('./routes/user')
//app
const app = express()
//mongoose
mongoose.connect(process.env.DATABASE, (err) => {
  if (err) throw err
  console.log('Connected to MongoDB!!!')
})
//.then(() => console.log('Database is connected'))
//routes middleware
app.use(userRoutes)
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Serve r is running on port ${port}`)
})
