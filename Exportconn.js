const { MongoClient} = require('mongodb');
const URL  = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);

async function dbconnect() {
    let result = await client.connect();
    db = result.db("Sustain-DB");
    return db.collection("sustain-collections");
}
module.exports = dbconnect;