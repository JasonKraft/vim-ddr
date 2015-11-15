var User = require('./Models/User');
var Song = require('./Models/Song');
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/vim_ddr', function(err){
    if(err) {console.trace("FAILED TO CONNECT"+err);}
    console.log('Connected to database...');

});

var db = mongoose.connection;
var Jason = new User.User({
    username: "LimitedWard",
    password: "Lady'sman1357"
    
});

var bel = new Song.Song({
    songName: "Hello",
    difficulty: "Easy",
})


db.once('open', function() {
    Jason.save(function(err) {
        if (err) throw err;
        else {
            Jason.defineProgress(bel.getName(), 2, 3, 4);
            bel.defineLevelData(["0101", 11]);
            console.log(bel.getData());
            console.log(Jason.getName());
            console.log(Jason.getUpdatedDate());
            console.log(Jason.progress);
            console.log("User created");



            //mongoose.disconnect();
        }
});
});

