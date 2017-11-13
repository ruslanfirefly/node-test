const mongoose  = require("mongoose");
const Promise = require("bluebird");
mongoose.connect('mongodb://test:test@ds245715.mlab.com:45715/test_db', { useMongoClient: true });
mongoose.Promise = Promise;


const Post = mongoose.model("Post", {
    title: String, 
    autor: String,
    text: String,
});

const TestData = mongoose.model("TestData",{});

module.exports ={
    Post,
    TestData,
    mongoose,
} 
