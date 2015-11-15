var mongoose = require('mongoose');
var crypto = require('crypto');
uuid = require('node-uuid');
var Schema = mongoose.Schema;


var userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        salt: { type: String, required: true, default: uuid.v1 },
        
        
        progress: [],
        
        created_at: Date,
        updated_at: Date
    }
);

var hash = function(passwd, salt) {
    return crypto.createHmac('sha256', salt).update(passwd).digest('hex');
};

userSchema.methods.setPassword = function(passwordString) {
    this.password = hash(passwordString, this.salt);
};

userSchema.methods.isValidPassword = function(passwordString) {
    return this.password === hash(passwordString, this.salt);
};

userSchema.methods.getName = function() {
    return this.username;
};

userSchema.methods.getPassword = function() {
    return this.password;
};

userSchema.methods.getProgress = function() {
    return this.progress;
};

userSchema.methods.getCreatedDate = function() {
    return this.created_at;
};

userSchema.methods.getUpdatedDate = function() {
    return this.updated_at;
};

userSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;
    
    next();
});

userSchema.methods.updateProgress = function(progressItem)
{
    this.progress.push(progressItem);
};

userSchema.methods.defineProgress = function(sName, Score)
{
    var progressObj = new Object(
    {
        songName: sName,
        userScore: eScore,
        //mediumScore: mScore,
        //hardScore: hScore
    });
    
    this.updateProgress(progressObj);
};

var User = mongoose.model('User', userSchema);

module.exports.User = User;

