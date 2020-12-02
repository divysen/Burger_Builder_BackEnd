'use strict';

const Order_Model = require('../models/order_model');

module.exports.public_api_docs = (req, res, next) => {
    res.send(`<pre>
        1. GET /get-ingredients:
           DESCRIPTION: get list of ingredients
        ----------------------------------------
        2. POST /place-order : 
           PAYLOAD: {
               
           },
           DESCRIPTION: place an order
        
    </pre>`);
};

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
    res.json([ack.ops, ack.insertedCount, ack.insertedId]);
};

module.exports.invalid_url = (req, res, next) => {
    res.status(404).json({
        Message: 'Invalid Url, ENDPOINT not found'
    });
};