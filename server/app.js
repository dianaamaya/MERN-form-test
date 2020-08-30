const express= require ('express');
const cors= require ('cors');

//initializations
const app= express();

// const
const users = require('./routes/users.route');

//settings
app.set('port', process.env.PORT || 4000);

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', users );

module.exports = app;