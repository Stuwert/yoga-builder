var express = require('express');
var router = express.Router();
var mdb = require('../db/mdb');
var payloadPrep = function (data) {
    //depends on DB decision, but likely:
    return JSON.parse(data);
}
router.get('/', function (req, res, next) {
    res.send("prepared to receive");
})
/* GET home page. */
router.get('/all', function(req, res, next) {
  // var request = req.query;
  // if (Object.keys(request).length) {
  //   // DO STUFF
  //   res.send(request);
  // } else {
  //   res.send('see the documentation');
  // }
  Pose.find(function (err, poses) {
    if (err) return console.error(err);
    var spar = payloadPrep(poses);
    res.json(spar);
});

});

module.exports = router;
