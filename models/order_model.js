'use strict';

let DbCon;

const Coll_Name = process.env.COLLORDER;

class Order{
    constructor( ingredients_list, total_price, customer_data ){
        this.ingredients = ingredients_list;
        this.price = total_price;
        this.customer = customer_data;
    };

    static async inject_db(dbclient){
        if(DbCon){
            return;
        }
        else{
            try{
                DbCon = await dbclient.db().collection(Coll_Name);
                console.log('OM Connected');
            }
            catch(e){
                console.error('Unable to establish connection handler to OM', e);
            }
        }
    }

    async place_order(){
        try{
            if(DbCon != undefined){
                const ack = await DbCon.insertOne(this);
                return ack;
            }
            else{
                return 'Database connection lost in OM';
            }
        }
        catch(e){
            return e;
        }
    };

    static async get_orders(email){
        try{
            if(DbCon != undefined){
                const ack = await DbCon.find({'customer.email': email}).toArray();
                return ack;
            }
            else{
                return 'Database connection lost in OM';
            }
        }
        catch(e){
            return e;
        }
    };
}

module.exports = Order;