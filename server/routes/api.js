var express = require('express');
var router = express.Router()
var moment = require('moment')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.json({
    text: moment('5/25/2018').fromNow()
  })
});

module.exports = router
