var express = require('express');
router = express.Router();
var knex = require('../db/knex');
var database = require('../db/database');
var poses = require('../seedposes.js');
router.get('/', function (req, res, next) {
    database.outputAll().then(function(result){
        res.send(JSON.stringify(result));
    })

})
// router.get('/all', function (req, res, next) {
//         database.outputAll().then(function(result) {
//             res.send(JSON.stringify(result));
//     })
//
//     router.get('/poses', function (req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//
// })


module.exports = router
