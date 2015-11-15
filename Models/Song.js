var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
    
    songName: String,
    difficulty: String,
    data: [],
    
    created_at: Date,
    updated_at: Date
})

songSchema.methods.getName = function() {
    return this.songName;
}

songSchema.methods.getDifficulty = function() {
    return this.difficulty;
}

songSchema.methods.getData = function(){
    return this.data;
}

songSchema.methods.getCreatedDate = function() {
    return this.created_at;
}

songSchema.methods.getUpdatedDate = function() {
    return this.updated_at;
}

songSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;
    
    next();
});

var Song = mongoose.model('Song', songSchema);
module.exports.Song = Song;
