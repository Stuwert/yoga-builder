var express = require('express');
router = express.Router();
var knex = require('../db/knex');
var database = require('../db/database');
bodyParser = require('body-parser');
methodOverride = require('method-override');
router.use(bodyParser.urlencoded({ extended: true }))
var poses = require('../seedposes.js');

poses.forEach(function(elem) {
    var insertObj = {
        'pose_name': 0,
        'sanskrit_name': 0,
        'translation': 0,
        'category': 0,
        'difficulty': 0,
        'description': 0,
        'benefits': 0,
        'benefits_array': 0
    }
    var catBox = elem.category.split(" / ");
    catObj = [];
    catBox.forEach(function(elem) {
        var temp = elem.split(" ").join("_");
        catObj.push(temp);
    });
    var benArr = elem.benefits.split(" ");
    var diffObj = elem.difficulty.split(" / ");
    insertObj.pose_name = elem.pose_name;
    insertObj.sanskrit_name = elem.sanskrit_name;
    insertObj.translation = JSON.stringify(elem.translation);
    insertObj.category = catObj;
    insertObj.difficulty = diffObj;
    insertObj.description = JSON.stringify(elem.description);
    insertObj.benefits = JSON.stringify(elem.benefits);
    insertObj.benefits_array = JSON.stringify(benArr);
    database.addPose(insertObj);
})

router.use(methodOverride(function(req, res){
     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
     var method = req.body._method
     delete req.body._method
     return method
          }
    }))
router.get('/all', function (req, res, next) {
        database.outputAll().then(function(result) {
            res.send(JSON.stringify(result));
    });

    router.get('/poses', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

});


module.exports = router;
