const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRouter = require('./routes/index');
const perfilRouter = require('./routes/perfil');
const criar_eleicao_Router = require('./routes/criar_eleicao');
const resultados_Router = require('./routes/resultados');
const eleicao_Router = require('./routes/eleicao');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/perfil', perfilRouter);
app.use('/criar_eleicao', criar_eleicao_Router);
app.use('/resultados', resultados_Router);
app.use('/eleicao', eleicao_Router);

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

module.exports = app;