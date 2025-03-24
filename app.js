require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const programsRouter = require('./routes/programs');

const app = express();

const allowedOrigins = [
  'https://test-gaya-belajar.politekniklp3i-tasikmalaya.ac.id',
  'https://test-otak.politekniklp3i-tasikmalaya.ac.id',
  'https://psikotest.politekniklp3i-tasikmalaya.ac.id',
  'https://databases.politekniklp3i-tasikmalaya.ac.id',
  'https://test-otak.politekniklp3i-tasikmalaya.ac.id',
  'https://beasiswa.politekniklp3i-tasikmalaya.ac.id',
  'https://sbpmb.politekniklp3i-tasikmalaya.ac.id',
  'https://sie.politekniklp3i-tasikmalaya.ac.id',
  'https://pmb.politekniklp3i-tasikmalaya.ac.id',
  'https://politekniklp3i-tasikmalaya.ac.id',
  'http://127.0.0.1:8000',
  'http://localhost:5173'
];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/programs', programsRouter);

module.exports = app;
