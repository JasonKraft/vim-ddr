var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
    
    songName: String,
    difficulty: String,
    data: [],
    
    url: String,
    
    created_at: Date,
    updated_at: Date
});

songSchema.methods.getName = function() {
    return this.songName;
}

songSchema.methods.getURL = function() {
    return this.url;
}

songSchema.methods.setURL = function(URL) {
    this.url = URL;
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
songSchema.methods.updateLevelData = function(dataObj) {
    this.data.push(dataObj);
}
songSchema.methods.defineLevelData = function(levelData) {

    var obj = new Object({
        arrow: levelData[0],
        time: levelData[1]
    });
    
    this.updateLevelData(obj);

}

songSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;
    
    next();
});

var Song = mongoose.model('Song', songSchema);
module.exports.Song = Song;
