var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api);

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var Schema = mongoose.Schema;
var url = "mongodb://localhost:27017/poses";
MongoClient.connect(url, function(err, dbx) {
    assert.equal(null, err);
    console.log("Connected to db server");
    // dbx.close();
})

var mongoose = require('mongoose');
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log("yo!");
    var posesSchema = mongoose.Schema({
        pose_name: {type: String, trim: true},
        sanskrit_name: {type: String, trim: true},
        translation: [],
        category: [],
        difficulty: {type: String, trim: true},
        description: [],
        benefits: {type: String, trim: true}
    });
    var Pose = mongoose.model('Pose', posesSchema);
    var testPose = new Pose ({
        pose_name: 'Revolved Bird of Paradise Pose',
        sanskrit_name: 'Parivṛtta Svarga Dvijāsana',
        translation: ['parivṛtta = revolved',
         'svarga = heaven',
         'dvija = twice born',
         'āsana = posture'],
         category: [
  'Standing',
  'Balancing'],
difficulty: 'Expert',
description:
 [ 'From', 'chair_twist.html', 'pose, the lower arm reaches back around the legs as the upper arm wraps around the back and the fingers of the respective hands eventually meet and interlace.  One foot stays rooted into the earth and straightens while the opposite leg comes up with a bent knee.  Once you are standing upright extend the leg towards the sky.  The ribcage is lifted and the heart is open in the full expression of the pose.  The gaze is forward.' ],
benefits: 'Increases the flexibility of the spine and back and stretches the shoulders.  Strengthens the legs.  Increases flexibility of the hip and knee joints.  Improves balance.  Opens the groin.  Stretches the hamstrings.'});
testPose.save(function (err, testPose) {
  if (err) return console.error(err);
  console.log("in baby in!");
});
Pose.find(function (err, poses) {
  if (err) return console.error(err);
  console.log(poses);
})
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
