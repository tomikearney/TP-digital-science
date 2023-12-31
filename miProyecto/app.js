var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*Requerimos modulo propio */
var mainRouter = require('./routes/main');
var heroesRouter = require('./routes/heroes');

/*Funcion de alto nivel*/ 
var app = express();

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*Recursos Estáticos: guardados en la carpeta public*/
app.use(express.static(path.join(__dirname, 'public')));

/*Prefijos */
app.use('/', mainRouter);
app.use('/heroes', heroesRouter);


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

/*Exportamos app*/
module.exports = app;
