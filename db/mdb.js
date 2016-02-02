// var mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;
// var Schema = mongoose.Schema;
// var url = "mongodb://heroku_2s0cn3r5:8rvn5mhr5j73gb28mrt7oiaqki@ds055545.mongolab.com:55545/heroku_2s0cn3r5";
// //var url = "mongodb://localhost:27017";
// MongoClient.connect(url, function(err, dbx) {
//     assert.equal(null, err);
//     console.log("Connected to db server");
//     // dbx.close();
// })
//
// var mongoose = require('mongoose');
// mongoose.connect(url);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//     console.log("yo!");
//
// //     var testPose = new Pose ({
// //         pose_name: 'Revolved Bird of Paradise Pose',
// //         sanskrit_name: 'Parivṛtta Svarga Dvijāsana',
// //         translation: ['parivṛtta = revolved',
// //          'svarga = heaven',
// //          'dvija = twice born',
// //          'āsana = posture'],
// //          category: [
// //   'Standing',
// //   'Balancing'],
// // difficulty: 'Expert',
// // description:
// //  [ 'From', 'chair_twist.html', 'pose, the lower arm reaches back around the legs as the upper arm wraps around the back and the fingers of the respective hands eventually meet and interlace.  One foot stays rooted into the earth and straightens while the opposite leg comes up with a bent knee.  Once you are standing upright extend the leg towards the sky.  The ribcage is lifted and the heart is open in the full expression of the pose.  The gaze is forward.' ],
// // benefits: 'Increases the flexibility of the spine and back and stretches the shoulders.  Strengthens the legs.  Increases flexibility of the hip and knee joints.  Improves balance.  Opens the groin.  Stretches the hamstrings.'});
// // testPose.save(function (err, testPose) {
// //   if (err) return console.error(err);
// //   console.log("in baby in!");
// // });
// //seeding DO NOT UNCOMMENT SEEDING!!!!!!!!
//
// // var poses = require('../poses.js');
// // var seedArray = [];
// // var x = 0;
// // poses.forEach(function(elem) {
// //     var altNameTmp = [];
// //     var categoryTmp = [];
// //     var tmpObj = {};
// //     var anatArray = [];
// //     if (elem.alt_name) {
// //         altNameTmp = elem.alt_name.split(" / ");
// //     }
// //     categoryTmp = elem.category.split(" / ");
// //     tmpObj.pose_id = x;
// //     x += 1;
// //     tmpObj.pose_name = elem.pose_name;
// //     tmpObj.sanskrit_name = elem.sanskrit_name;
// //     tmpObj.translation = elem.translation;
// //     if (elem.alt_name) {
// //         tmpObj.alt_name = altNameTmp;
// //     }
// //     tmpObj.category = categoryTmp;
// //     tmpObj.difficulty = elem.difficulty;
// //     tmpObj.description = elem.description;
// //     tmpObj.benefits = elem.benefits;
// //     anatArray = elem.benefits.split(" ");
// //     tmpObj.anatomy = anatArray;
// //     seedArray.push(tmpObj);
// // })
// //
// // for (i=0; i < seedArray.length; i ++) {
// //     var j = new Pose(seedArray[i])
// //     j.save(function (err, j) {
// //       if (err) return console.error(err);
// //     });
// // };
// //
// // Pose.find(function (err, poses) {
// //   if (err) return console.error(err);
// //   console.log(poses);
// // })
// });
