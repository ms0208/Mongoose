// Coonect to MongoDB. 
const { MongoClient } = require('mongodb');
const URL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);

async function dbconnect() {
    try {
        await client.connect();
        console.log("Connected successfully to server");

        const  db = client.db("Sustain-DB");
        const coll =  db.collection("sustain-collections");
        const resp = await coll.find({}).toArray();
        const d1 = await coll.find({password:"12345"}).toArray();
        console.log(resp);
        console.log(d1);
    } catch (err) {
        console.error("Error: ", err);
    } finally {
        await client.close();
    }
}
dbconnect();
