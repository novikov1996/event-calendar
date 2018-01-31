var express = require('express')
var router = express.Router()
/*
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/local')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var UserSchema = new Schema({
  id: ObjectId,
  login: String,
  password: String
})

var User = mongoose.model('User', UserSchema)
/!* GET users listing. *!/
router.post('/', function (req, res, next) {
  let userCreds = req.body
  if (!userCreds.login || !userCreds.password) {
    res.jsonp({error: 'error, login or password is undefined'})
  } else {
    let user = new User()
    user.login = userCreds.login
    user.password = userCreds.password
    user.save(console.error)
    res.jsonp({responseFrom: 'server', payload: req.body})
  }
})
*/

module.exports = router
