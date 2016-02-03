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
    //retrieve all blobs from Monogo
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

module.exports = router;
