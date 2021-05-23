const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000
const db = mongoose.connection

//mongoose
mongoose.connect('mongodb://localhost/shortLink', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => { console.log('mongodb Error!') })
db.once('open', () => { console.log('mondodb connected!') })

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shortURL', (req, res) => {
  res.render('shortURL')
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})