'use strict';

let DbCon;

const Coll_Name = process.env.COLLINIT;

class Burger{
    static async inject_db(dbclient){
        if(DbCon){
            return;
        }
        else{
            try{
                DbCon = await dbclient.db().collection(Coll_Name);
                console.log('BBM Connected');
            }
            catch(e){
                console.error('Unable to establish connection handler to BBM', e);
            }
        }
    }

    static async get_ingredients_list(version){
        try{
            if(DbCon != undefined){
                const ack = await DbCon.find({'schema_version': version}).toArray();
                return ack;
            }
            else{
                return 'Database connection lost in BBM';
            }
        }
        catch(e){
            return e;
        }
    }
}

module.exports = Burger;