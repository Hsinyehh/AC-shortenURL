const express = require('express')
const router = express.Router()
const shortid = require('shortid')
const Link = require('../../models/link')


router.post('/', async (req, res) => {
  await Link.create(
    {
      full: req.body.fullURL,
      short: shortid.generate(),
    })
    .then(() => { res.redirect('/') })
    .catch(error => console.log('error'))
})



module.exports = router