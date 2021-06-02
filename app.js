const express = require('express');
const morgan = require('morgan');

const gardenRouter = require('./routes/gardenRoute');
const userRouter = require('./routes/userRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Routes

app.use('/api/v1/gardens', gardenRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
