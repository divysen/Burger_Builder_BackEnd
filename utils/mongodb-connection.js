'use strict';

const MongoClient = require('mongodb').MongoClient;
const Db_Url = process.env.MONGODBURL;

const Order_Model = require('../models/order_model');

MongoClient.connect(Db_Url,{ 
    // autoReconnect: true,
    connectTimeoutMS: 3000,
    keepAlive: true,
    poolSize: 5,
    useUnifiedTopology: true,
    useNewUrlParser: true
 })
.then( async client => {
    await Order_Model.inject_db(client);
})
.catch( error => console.log('Database connection error', error) );