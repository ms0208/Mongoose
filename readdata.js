const { MongoClient } = require('mongodb');
const URL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);
// Method-1
/*
async function dbconnect()
{
    let result = await client.connect();
    db = result.db("Sustain-DB");
    return db.collection("sustain-collections");
} 
dbconnect().then((resp)=>{
    resp.find({password:"786"}).toArray().then((data)=>{
        console.log(data);
    });
});*/
// Method-2
async function dbconnect2() {
    try {
        await client.connect();
        return client.db("Sustain-DB").collection("sustain-collections");
    } catch (err) {
        console.error(err);
        return null;
    }
}

const main = async () => {
    const collection = await dbconnect2();
    if (collection) {
        const data = await collection.find().toArray();
        console.log(data);
    }
}
main();