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

    router.get('/poses?category=', function (req, res, next) {
            var query = req.query.category;
            query = payload.split('%20');
            var prepArray = [];
            // query.forEach(function(elem) {
            //     var first = elem[0].toUpperCase();
            //     var rest = elem.substring(1, (elem.length - 1));
            //     prepArray.push(first + rest);
            // });
            var payload = [];
            prepArray.forEach(function(elem) {
                mongoose.model('Pose').find({category: elem}, function (err, poses) {
                    if (err) {
                        return console.error(err);
                    } else
                    payload.push(poses);
            }) });

                      res.format({

                        html: function(){
                            res.send(JSON.stringify(payload));
                        },

                        json: function(){
                            res.json(payload);
                        }
                    });
                });


module.exports = router;
