const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Sustain-DB')
    .then(() => console.log("connection successfull...."))
    .catch((err) => console.log(err));

// Schema
// A mongoose schema defines the structure of document,
// default value, validators, etc.

const schema = new mongoose.Schema({
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: Number,
        required: true
    }
});
// Mongoodr model is a wrapper of mongoose schema.
// create collection
const Model = new mongoose.model("sustain-collections", schema);

// data 
const data = new Model(
    {
        email: "Manav.123@gmail.com",
        password: "1230"
    }
)
const data1 = new Model(
    {
        email: "Pranav.123@gmail.com",
        password: "123"
    }
)
data.save();
data1.save();