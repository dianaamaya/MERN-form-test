//get variables
require('dotenv').config();

//get the server configuration
const app = require('./app');

//get database configuration
require('./database');

// set server to listen
const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  console.log('Environment:', process.env.NODE_ENV);
});

module.exports = server;