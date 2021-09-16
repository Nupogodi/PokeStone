const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');
const { errorHandler, notFound } = require('./middlewares/index');
const { userRoute } = require('./routes/index');
require('dotenv').config();

const app = express();

// middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

// Database
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(chalk.blue('Connected to MongoDB'));
});

mongoose.connection.on('error', (err) => {
  console.log(chalk.red('error connection', err));
});

// routes
app.use('/api/users', userRoute);

// notFound middleware
app.use(notFound);

// errorHandler middleware
app.use(errorHandler);

// Server
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(chalk.green(`Listening at http://localhost:${port}`));
});
