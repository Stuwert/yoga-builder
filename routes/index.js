var express = require('express');
var router = express.Router();
var poses = require('../seedposes.js');
var database = require('../db/database.js');
/* GET home page. */
router.get('/', function(req, res, next) {
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
            var diffObj = elem.difficulty;
            insertObj.pose_name = elem.pose_name;
            insertObj.sanskrit_name = elem.sanskrit_name;
            insertObj.translation = JSON.stringify(elem.translation);
            insertObj.category = catObj;
            insertObj.difficulty = diffObj;
            insertObj.description = JSON.stringify(elem.description);
            insertObj.benefits = JSON.stringify(elem.benefits);
            insertObj.benefits_array = JSON.stringify(benArr);
            database.addPose(insertObj).then(function (result) {
                    res.send("...");
            })
        })
});

module.exports = router;
