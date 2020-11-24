'use strict';

const MongoClient = require('mongodb').MongoClient;
const Db_Url = process.env.MONGODBURL;

MongoClient.connect(Db_Url,{ 
    autoReconnect: true,
    connectTimeoutMS: 3000,
    keepAlive: true,
    poolSize: 5,
    useUnifiedTopology: true,
    useNewUrlParser: true
 })
.then( async clinet => {
    console.log('Connected to DB');
})
.catch( error => console.log('Database connection error', error) );