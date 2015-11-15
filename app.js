var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var mongoose = require('mongoose');

// var routes = require('./routes/index');
// var users = require('./routes/users');
mongoose.connect('mongodb://localhost/vim_ddr');
var User = require('./Models/User');
var Song = require('./Models/Song');
var newUser = User.User({
	username:'test',
});

newUser.setPassword('test1');

newUser.save(function(err) {
	if (err) throw err;

	console.log('user created');
})

var app = express();
app.listen(8080);
//app.set('port', 8080/*process.env.PORT || 3000*/);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
	secret : process.env.SESSION_SECRET || 'dickbutt',
	resave : false,
	saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use('login', new passportLocal.Strategy(function(username, password, done) {
	User.User.findOne({ 'username' : username }, function(err, user) {
		if (err) { done(err,null); }
		else {
			if (!user || !user.isValidPassword(password)) { done(null,null); }
			else { done(null, { id : user._id, name : user.username }); }
		}
	});
	// if (username === User) {
	// 	done(null, { id : username, name : 'Mr. ' + username});
	// } else {
	// 	done(null,null);
	// }
}));

passport.use('signup', new passportLocal.Strategy({
	passReqToCallBack : true
},
function(username, password, done) {
	findOrCreateUser = function(){
      // find a user in Mongo with provided username
      User.User.findOne({'username':username},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false/*, 
             req.flash('message','User Already Exists')*/);
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User.User();
          // set the user's local credentials
          newUser.username = username;
          newUser.setPassword(password);
 
          // save the user
          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);  
              throw err;  
            }
            console.log('User Registration succesful');
            console.log(newUser);   
            return done(null, { id : newUser._id, name: newUser.username});
          });
        }
      });
    };
     
    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.User.findById(id, function(err, user) {
		done(null, { id : id, name : user.username });
	});
});

// app.use('/', routes);
// app.use('/users', users);
app.post('/updateplayer', function(req, res) {
	if (!req.isAuthenticated()) { res.redirect('/'); }

	User.User.findOneAndUpdate({ _id : req.id }, function(err, player) {
		if (err) throw err;

		player.defineProgress(req.songName, req.score);
	});

	res.redirect('/');
});

app.get('/menu', function(req, res, next) {
	if (!req.isAuthenticated()) { res.redirect('/'); }

	Song.Song.find(function(err, songs) {
		res.render('menu', {'songs' : songs});
	});
});

app.get('/play', function(req, res, next) {
	//res.render('gamev1');

	if (!req.isAuthenticated()) { res.redirect('/'); }

	Song.Song.findOne({'songName': req.songName},function(err, song) {
	  // In case of any error return
	  if (err){
	    console.log(err);
	    return done(err);
      }
        
        if(song){
        	res.render(song);
        }
  });
});

app.get('/register', function(req, res, next) {
	res.render('register', {title : 'Register'});
});

app.post('/register', passport.authenticate('signup'), function(req, res) {
	res.redirect('/menu');
});

app.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

app.post('/login', passport.authenticate('login'), function(req, res) {
	res.redirect('/menu');
});

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

app.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express',
		isAuthenticated : req.isAuthenticated(),
		user : req.user
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
