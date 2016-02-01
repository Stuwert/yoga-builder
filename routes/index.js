var express = require('express');
var router = express.Router();

var payloadPrep = function (data) {
    //depends on DB decision, but likely:
    return JSON.parse(data);
}

var currentSet;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("online and prepared to receive");
});
//
// router.get('/api/poses/:category', function (req, res, next) {
//     //returns all poses matching the params.category
//     //which should be passed as a CSV string allowing
//     //ease of arrayifying and passing to query
//
//     //if next filter comes from within a returned dataset context,
//     //pass currentSet &
//     //rcurrentSet = results
// })
//
// router.get('/api/poses/:id', function (req, res, next) {
//     //returns pose with id matching params.id
// })
//
// router.get('/api/poses/:name', function (req, res, next) {
//     //function that translates params.name to params.id
//     var id;
//     res.redirect('/api/poses/' + id);
// })
//
// router.get('/api/poses/:anatomy', function (req, res, next) {
//     //returns all poses that match an element of the arrayifiable
//     //params.anatomy
//
//     //if next filter comes from within a returned dataset context,
//     //pass currentSet &
//     //rcurrentSet = results
// })

router.get('/api', function (req, res, next) {
    //custom filtering call that gathers req.query.poses || req.query.sequences || etc.
    //and then chains
    //DB calls to provide the result.

    //is the only real route actually needed here.
})

router.get('/api/sequences/', function (req, res, next) {
    //placeholder until sequences fields have been agreed upon
})


module.exports = router;
