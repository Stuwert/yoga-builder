var express = require('express');
var router = express.Router();

var payloadPrep = function (data) {
    //depends on DB decision, but likely:
    return JSON.parse(data);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var request = req.query;
  if (Object.keys(request).length) {
    // DO STUFF
    res.send(request);
  } else {
    res.send('see the documentation');
  }
});

module.exports = router;
