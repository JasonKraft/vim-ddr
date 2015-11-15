var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');


// var routes = require('./routes/index');
// var users = require('./routes/users');

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

passport.use(new passportLocal.Strategy(function(username, password, done) {
	if (username === password) {
		done(null, { id : username, name : 'Mr. ' + username});
	} else {
		done(null,null);
	}
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	done(null, { id : id, name : 'Mr. ' + id });
});

// app.use('/', routes);
// app.use('/users', users);

app.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

app.post('/login', passport.authenticate('local'), function(req, res) {
	res.redirect('/');
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
