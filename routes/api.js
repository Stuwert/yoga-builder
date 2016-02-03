var express = require('express');
router = express.Router();
var knex = require('../db/knex');
var database = require('../db/database');
var poses = require('../seedposes.js');
router.get('/', function (req, res, next) {
    // database.outputAll().then(function(result){
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.json(result);
    // poses.forEach(function(elem) {
    //     var insertObj = {
    //         'pose_name': 0,
    //         'sanskrit_name': 0,
    //         'translation': 0,
    //         'category': 0,
    //         'difficulty': 0,
    //         'description': 0,
    //         'benefits': 0,
    //         'benefits_array': 0
    //     }
    //     var catBox = elem.category.split(" / ");
    //     catObj = [];
    //     catBox.forEach(function(elem) {
    //         var temp = elem.split(" ").join("_");
    //         catObj.push(temp);
    //     });
    //     var benArr = elem.benefits.split(" ");
    //     var diffObj = elem.difficulty;
    //     //boom
    //     insertObj.pose_name = elem.pose_name;
    //     insertObj.sanskrit_name = elem.sanskrit_name;
    //     insertObj.translation = JSON.stringify(elem.translation);
    //     insertObj.category = catObj;
    //     insertObj.difficulty = diffObj;
    //     insertObj.description = JSON.stringify(elem.description);
    //     insertObj.benefits = JSON.stringify(elem.benefits);
    //     insertObj.benefits_array = JSON.stringify(benArr);
    //     database.addPose(insertObj).then(function (result) {
    //             res.send("...");
    //     })
    // })
    //})
res.send("hi");
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

router.get('/poses/catdiff', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var diff = req.query.difficulty;
    var catPrep = req.query.category;
    cat = catPrep.split(" ");
    database.outputCatDiff(cat, diff).then(function(result) {
        res.json(result);
    })
})


module.exports = router
