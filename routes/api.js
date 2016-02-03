var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'), //mongo connection
bodyParser = require('body-parser'), //parses information from POST
methodOverride = require('method-override'); //used to manipulate POST
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
     // look in urlencoded POST bodies and delete it
     var method = req.body._method
     delete req.body._method
     return method
          }
    }))
router.get('/all', function (req, res, next) {

        mongoose.model('Pose').find({}, function (err, poses) {
              if (err) {
                  return console.error(err);
              } else {

                  res.format({

                    html: function(){
                        res.send(JSON.stringify(poses));
                    },

                    json: function(){
                        res.json(poses);
                    }
                });
              }
        });
    });

    router.get('/poses', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            var filter = {};
                if (req.query.category) {
                    var categoryp = req.query.category;
                    categoryp = category.split(" ");
                     filter.category = {$in: categoryp};
                }
                if (req.query.difficulty) {
                    var difficultyp = req.query.difficulty;
                    filter.difficulty = difficultyp;
                }
                if (req.query.pose_id) {
                    var pose_idp = req.query.pose_id;
                    filter.pose_id = pose_idp;
                }
                mongoose.model('Pose').find(filter), function (err, poses) {
                    if (err) {
                        return console.error(err);
                    } else


                      res.format({

                        html: function(){
                            res.send(JSON.stringify(poses));
                        },

                        json: function(){
                            res.json(poses);
                        }
                    });
                };
            });


module.exports = router;
