
const express = require('express');
const history = require('connect-history-api-fallback');
const api = require('tingo-rest');

const app = express();

// **** Middlewares

// REST API
app.use('/api', api('data'));

// Angular Build
app.use(history());
app.use(express.static('dist/ngx-forms'));

// Start the server
const server = app.listen(3000, function () {

  const host = server.address().address;
  const port = server.address().port;

  console.log('App server listening at http://%s:%s', host, port);

});
