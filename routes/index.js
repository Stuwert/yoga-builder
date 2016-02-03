var express = require('express');
var router = express.Router();
var poses = require('../seedposes.js');
var database = require('../db/database.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/api');
})

module.exports = router;
