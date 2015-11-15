var User = require('./Models/User');
var mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/vim_ddr', function(err){
    if(err) console.trace("FAILED TO CONNECT"+err);
});

var Jason = new User({
    username: "LimitedWard",
    password: "Lady'sman1357"
});


Jason.save(function(err) {
    if (err) throw err;
    
    console.log("User created");
});

//console.log(Jason.getName());

mongoose.disconnect();