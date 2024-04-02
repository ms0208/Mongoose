const dbconnect = require('./Exportconn');
// Create a data or insert a data
const insert = async () => {
    const db = await dbconnect();
    const result = await db.insertOne(
        {
            email: "Manav.123@gmail.com",
            password: "12345"
        }
    );
    console.log(result);
    const result1 = await db.insertMany([
        {
            email: "Mana.123@gmail.com",
            password: "2345"
        },
        {
            email: "Mnav.123@gmail.com",
            password: "1245"
        }
    ]);
    console.log(result1);
}

insert();