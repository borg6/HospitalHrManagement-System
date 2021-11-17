const path = require('path');

const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const express = require('express');
const { bottender } = require('bottender');

const index = require('./routes');
const users = require('./routes/users');

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /* ----------  Views  ---------- */

  server.set('views', path.join(__dirname, 'views