var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var progressSchema = new Schema(
    {
        songName: String,
        easyScore: Number,
        mediumScore: Number, 
        hardScore: Number
    }
);

var userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        
        
        progress: [progressSchema],
        
        created_at: Date,
        updated_at: Date,

    }
);

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

userSchema.methods.defineProgress = function(sName, eScore, mScore, hScore)
{
    var progressObj = new progressSchema(
    {
        songName: sName,
        easyScore: eScore,
        mediumScore: mScore,
        hardScore: hScore
    })
    
    
    this.updateProgress(progressObj);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
