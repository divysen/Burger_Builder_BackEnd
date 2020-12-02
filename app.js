'use strict';

const Dotenv = require('dotenv').config();
if( Dotenv.error ){
    console.error('error parsing environment variables',Dotenv.error.stack);
    process.exit();
}
const ConnectToDb = require('./utils/mongodb-connection');
const Express = require('express');
const Helmet = require('helmet');
const ExpressRateLimit = require('express-rate-limit');
const Timeout = require('connect-timeout');
const Cors = require('cors');
const Morgan = require('morgan');
const BoydParser = require('body-parser');
const CookieParser = require('cookie-parser');

const PublicRoutes = require('./routes/public_routes');
const UserRoutes = require('./routes/user_routes');

const app = Express();
app.use(

    Helmet(),
    ExpressRateLimit({windowMs: 1000, max: 100}),
    Timeout('3s'),
    Cors(),
    BoydParser.json({limit: 2048, type: 'application/json',strict: true}),
    CookieParser(),

);

app.use('/user',UserRoutes);
app.use(PublicRoutes);

module.exports = app;