var express = require('express');
var router = express.Router()
var moment = require('moment')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.json({
    text: "It has been " + moment().diff('5/25/2018', 'days') + " days since Daniel should have gotten the money from investors"
  })
});

module.exports = router
