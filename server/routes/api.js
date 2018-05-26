var express = require('express');
var router = express.Router();
var moment = require('moment')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(moment('5/25/2018').fromNow())
});

module.exports = router;
