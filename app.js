// https://www.npmjs.com
// För *createError* skapa felmedelanden: tex 404, 500 koder etch
// Cookie parser
var createError = require('http-errors');

// Anropar express
var express = require('express');
var path = require('path');

// npm paket för användning av handlebars
var expressHbs = require('express-handlebars');

// för anslutning mot mongoDB
var mongoose = require('mongoose');

// middleware, session data sparas server side
// kan användas för göra det möjligt att produkter sparas när användare är inloggad
var session = require('express-session');

// Ett API som Validerar requests. 
// Kontroll om vad som händer vid "success" eller "fail"
var passport = require('passport');

// Används för att spara meddelanden i session. Meddlandena skrivs i flash och rensas sedan efter att det visats för användaren.
// flash ser till att efter rendering så finns fortfarande meddelandena/meddelandet kvar.
var flash = require('connect-flash');
var validator = require('express-validator');

// Paket jag la till som stod i dokumentationen för deploy
var compression = require('compression');
var helmet = require('helmet');

// Renderar index.js filen i routes mappen
var indexRouter = require('./routes/index');


// mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});
// Skapar anslutningen till live databasen hos mlab
mongoose.connect('mongodb://uhhi2000:Hpf21045@ds119734.mlab.com:19734/examendb', {useNewUrlParser: true});
require('./config/passport');

// Sparar express i variabel för att ens kunna skapa vår app med.
var app = express();

app.use(compression()); //Compress all routes

// view engine setup, handlebars setup.
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// parsar paketen
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());

// Hashar session http://www.senchalabs.org/connect/session.html
app.use(session({secret: 'mysecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// Renderar/parsar appen till index
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

// Ansluter till port 8000, denna port är ett krav av "heroku" https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
var port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

// Fungerar ungefär som en "return i en funktion fast för "require - requests" get
module.exports = app;