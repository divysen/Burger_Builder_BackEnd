'use strict';

const Order_Model = require('../models/order_model');

module.exports.user_api_docs = (req,res,next) => {
    res.send(`<pre>
        1. POST /user/get-orders
           PAYLOAD: {
               'email' : '< some valid email id >'
           }
           DESCRIPTION: get array of orders of the user
        ----------------------------------------------   
    </pre>`);
};

module.exports.get_orders = async (req,res,next) => {
    // console.log(req.body);
    const ack = await Order_Model.get_orders(req.body.user_email);
    // console.log(ack);
    res.json({
        Message: ack
    });
};