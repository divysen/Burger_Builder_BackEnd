'use strict';

const Router = require('express').Router({ strict: true });
const Controller = require('../controllers/public_controller');
const Validator = require('express-validator');

Router.get('/get-ingredients',Controller.get_ingredient);

Router.post('/place-order',Controller.place_order);

Router.use(Controller.invalid_url);

module.exports = Router;