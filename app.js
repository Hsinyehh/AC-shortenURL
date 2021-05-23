const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const db = mongoose.connection

mongoose.connect('mongodb://localhost/shortLink', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => { console.log('mongodb Error!') })
db.once('open', () => { console.log('mondodb connected!') })

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})