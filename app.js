var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);
var compression = require('compression');
var helmet = require('helmet');
var indexRouter = require('./routes/index');
var app = express();

// Skapar anslutningen till live databasen hos mlab
mongoose.connect('mongodb://uhhi2000:Hpf21045@ds119734.mlab.com:19734/examendb', {useNewUrlParser: true});

// view engine setup, handlebars setup.
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// parsar paketen
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(compression()); //Compress all routes

// Hashar session http://www.senchalabs.org/connect/session.html
app.use(session({
  secret: 'mysecret', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // cookie expire *time to live*
  cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Renderar/parsar appen till index
app.use('/', indexRouter);
app.use(helmet());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
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

// Ansluter till port 8000, denna port är ett krav av "heroku" https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
var port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

// Fungerar ungefär som en "return i en funktion fast för "require - requests" get
module.exports = app;
