const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
  fullLink: {
    type: String
  },
  shortLink: {
    type: String
  }
})


module.exports = mongoose.model('link', linkSchema)