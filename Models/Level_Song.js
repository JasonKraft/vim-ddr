var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var levelSchema = new Schema({
    
    data: [],
    
    created_at: Date ,
    updated_at: Date
    
});

var songSchema = new Schema({
    
    songName: String,
    difficulty: String,
    data: levelSchema,
    
    created_at: Date,
    updated_at: Date
})

levelSchema.methods.getData = function() {
    return this.data;
}

levelSchema.methods.getCreatedDate = function() {
    return this.created_at;
}

levelSchema.methods.getUpdatedDate = function() {
    return this.updated_at;
}

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

levelSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;
    
    next();
});

songSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;
    
    next();
});
