const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Link = require('./models/link')
const shortid = require('shortid')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const db = mongoose.connection

app.use(bodyParser.urlencoded({ extended: false }))

//mongoose
mongoose.connect('mongodb://localhost/shortLink', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => { console.log('mongodb Error!') })
db.once('open', () => { console.log('mondodb connected!') })

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  Link.find()
    .lean()
    .then(URLs => res.render('index', { URLs: URLs }))
    .catch(error => console.log('error'))

})

app.post('/shortURL', async (req, res) => {
  await Link.create(
    {
      full: req.body.fullURL,
      short: shortid.generate(),
    })
    .then(() => { res.redirect('/') })
    .catch(error => console.log('error'))
})

app.get('/:shortURL', async (req, res) => {
  const URL = await Link.findOne({ short: req.params.shortURL })
  if (URL === null) {
    return res.sendStatus(404)
  }

  URL.clicks++
  URL.save()
  res.redirect(URL.full)

})


app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})