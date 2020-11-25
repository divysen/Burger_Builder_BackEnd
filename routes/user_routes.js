'use strict';

const Router = require('express').Router({ strict: true });
const Controller = require('../controllers/user_controller');
const Validator = require('express-validator');

Router.get('/auth',Controller.auth_controller);

module.exports = Router;