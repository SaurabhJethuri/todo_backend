const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`connect to MongoDB...`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(port, () => {
    console.log(`listening on: ${port}`)

})