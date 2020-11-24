const Router = require('express').Router({ strict: true });
const Validator = require('express-validator');

Router.get('/auth',(req,res,next) => {
    res.json('/auth route');
});

module.exports = Router;