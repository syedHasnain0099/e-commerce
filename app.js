const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//db
const db = require('./config/keys').mongoURI
//import routes
const userRoutes = require('./routes/user')
//app
const app = express()
//mongoose
mongoose
  .connect(db)
  .then(() => console.log('database is connected'))
  .catch((err) => console.log(err))

//.then(() => console.log('Database is connected'))
//routes middleware
app.use(userRoutes)
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Serve r is running on port ${port}`)
})
