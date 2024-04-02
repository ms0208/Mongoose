const dbconnect = require('./Exportconn');

const update = async () => {
    let data = await dbconnect();
    let result = await data.updateOne(
        {email: "Manav.123@gmail.com"},
        { $set: { password: "007" } }
    );
    console.log(result);
}

update();
