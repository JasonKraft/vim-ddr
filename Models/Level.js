var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var levelSchema = new Schema({
    
    data: [],
    
    created_at: Date ,
    updated_at: Date
    
});

levelSchema.methods.getData = function() {
    return this.data;
}

levelSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;
    
    next();
});
