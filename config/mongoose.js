const mongoose = require('mongoose')
const db = mongoose.connection



//mongoose
mongoose.connect('mongodb://localhost/shortLink', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => { console.log('mongodb Error!') })
db.once('open', () => { console.log('mondodb connected!') })


module.exports = db