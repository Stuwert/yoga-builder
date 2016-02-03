var express = require('express');
router = express.Router();
var knex = require('../db/knex');
var database = require('../db/database');
var poses = require('../seedposes.js');
router.get('/', function (req, res, next) {
    database.outputAll().then(function(result){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(result);
    })

})

router.get('/poses/cat', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var catPrep = req.query.category;
    catPrep = catPrep.split(" ");
    database.outputByCat(catPrep).then(function(result) {
        res.json(result);
    })
});

router.get('/poses/diff', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var diffPrep = req.query.difficulty;
    database.outputByDiff(diffPrep).then(function(result) {
        res.json(result);
    })
});

router.get('/poses/id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var id = req.query.id;
    database.outputById(id).then(function(result) {
        res.json(result);
    })
});


module.exports = router
