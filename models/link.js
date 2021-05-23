const mongoose = require('mongoose')
const Schema = mongoose.Schema


const linkSchema = new Schema({
  full: {
    type: String,
    require: true
  },
  short: {
    type: String,
    require: true
  },
  clicks: {
    type: Number,
    require: true,
    default: 0
  }
})


module.exports = mongoose.model('link', linkSchema)