const express = require('express')
const router = express.Router()
const Link = require('../../models/link')

router.get('/', (req, res) => {
  Link.find()
    .lean()
    .then(URLs => res.render('index', { URLs: URLs }))
    .catch(error => console.log('error'))

})

router.get('/:shortURL', async (req, res) => {
  const URL = await Link.findOne({ short: req.params.shortURL })
  if (URL === null) {
    return res.sendStatus(404)
  }

  URL.clicks++
  URL.save()
  res.redirect(URL.full)

})

module.exports = router