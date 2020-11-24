const Router = require('express').Router({ strict: true });
const Validator = require('express-validator');

Router.get('/',(req,res,next) => {
    res.json('/ route');
});

Router.use((req, res, next) => {
    res.json('/404 not found');
});

module.exports = Router;