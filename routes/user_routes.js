'use strict';

const Router = require('express').Router({ strict: true });
const Controller = require('../controllers/user_controller');
const Validator = require('express-validator');

if( process.env.NODE_ENV === 'development' ){
    Router.get('/help',Controller.user_api_docs);
}

Router.post('/get-orders',Controller.get_orders);

module.exports = Router;