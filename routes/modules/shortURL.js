const express = require('express')
const router = express.Router()
const Link = require('../../models/link')


function getRandomString(length) {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  }
  return result
}



router.post('/', async (req, res) => {
  //const uid = new ShortUniqueId()
  await Link.create(
    {
      full: req.body.fullURL,
      short: getRandomString(5)

    })
    .then(() => { res.redirect('/') })
    .catch(error => console.log('error'))
})



module.exports = router