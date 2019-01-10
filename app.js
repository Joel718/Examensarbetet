var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');

var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var compression = require('compression');
var helmet = require('helmet');

var indexRouter = require('./routes/index');

var app = express();

app.use(compression()); //Compress all routes

// mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});
mongoose.connect('mongodb://uhhi2000:Hpf21045@ds119734.mlab.com:19734/examendb', {useNewUrlParser: true});
require('./config/passport');


// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({secret: 'mysecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(helmet());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

module.exports = app;