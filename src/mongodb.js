const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME

class MongoDBProxy {
    dbName
    client

    constructor(dbName, client) {
        this.client = new MongoClient(url)
        this.dbName = dbName
    }

    connect = async () => {
        try {
            await this.client.connect();
            console.log("Connected correctly to server");
        
            const db = this.client.db(this.dbName);
        
            // Insert a single document
            await db.collection('User').insertOne({ name: 'Bambi2', password: '54321' });

            const users = await db.collection('User')

            console.log({ users })
        } catch (err) {
            console.log(err.stack);
        }
    }
}

const mongoProxy = new MongoDBProxy(dbName, url)

export { mongoProxy }