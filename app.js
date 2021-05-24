const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000



app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)



//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')




app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})