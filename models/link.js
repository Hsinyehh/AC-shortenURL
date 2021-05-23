const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
  fullLink: {
    type: URL,
    require: true
  },
  shortLink: {
    type: URL,
    default: shortid.generate
  }
})


module.exports = mongoose.model('link', linkSchema)