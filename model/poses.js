var mongoose = require('mongoose');
var posesSchema = new mongoose.Schema({
    pose_id: Number,
    pose_name: {type: String, trim: true},
    sanskrit_name: {type: String, trim: true},
    translation: [],
    category: [],
    difficulty: {type: String, trim: true},
    description: [],
    benefits: {type: String, trim: true}
});
mongoose.model('Pose', posesSchema);
