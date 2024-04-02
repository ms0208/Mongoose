const dbconnect = require('./Exportconn');

const deletedata = async ()=>{
    let data = await dbconnect();
    let result = await data.deleteOne(
        {
            email:"Manav.123@gmail.com"
        }
    );
    console.log(result);
}
deletedata();