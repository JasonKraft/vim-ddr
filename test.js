var User = require('./Models/User');
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



db.once('open', function() {
    Jason.save(function(err) {
        if (err) throw err;
        else {
            Jason.defineProgress("Hello", 2, 3, 4);

            //Jason.progress.push(Progress);
            console.log(Jason.getName());
            console.log(Jason.getUpdatedDate());
            console.log(Jason.progress);
            console.log("User created");



            //mongoose.disconnect();
        }
});
});

