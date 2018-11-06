import { MongoClient } from 'mongodb'

const url = process.env.MONGODB_URI || ''
const dbName = process.env.MONGODB_DBNAME || ''

class MongoDBProxy {
    private url: string
    private dbName: string
    private client: any

    constructor(url: string, dbName: string) {
        this.url = url
        this.dbName = dbName
    }

    connect() {
        this.client = new MongoClient(url)
    }
}

const proxy = new MongoDBProxy(url, dbName)

export { proxy }