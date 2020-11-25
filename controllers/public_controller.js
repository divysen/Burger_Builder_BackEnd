'use strict';

const Order_Model = require('../models/order_model');

module.exports.get_ingredient = (req, res, next) => {
    res.json({
        ingredients: {
            cheese: 0, tomato: 0, salad: 0, onion: 0
        }
    });
};

module.exports.place_order = async (req, res, next) => {
    // console.log(req.body);
    const New_Order = new Order_Model(req.body.ingredients_list, req.body.total_price, req.body.customer_data);
    const ack = await New_Order.place_order();
    res.json({data: ack});
};

module.exports.invalid_url = (req, res, next) => {
    res.json({
        Message: 'Invalid Url, Page not found'
    });
};