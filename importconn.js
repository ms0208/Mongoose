const dbconnect = require('./Exportconn');
const main = async () =>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
}
main();