const path = require('path');
const express = require('express');
const morgan = require('morgan');

const gardenRouter = require('./routes/gardenRoute');
const userRouter = require('./routes/userRoute');
const viewRouter = require('./routes/viewRoute');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

//serving static files
//global middlewares
app.use(express.static(path.join(__dirname,'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use(express.json());





// Routes
app.use('/', viewRouter);
app.use('/api/v1/gardens', gardenRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
