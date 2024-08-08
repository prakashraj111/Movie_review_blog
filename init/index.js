const mongoose= require("mongoose");
const initData = require("./data.js");
const Post = require("../models/post.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/movieblog";

main().then(()=> {
    console.log("Connected to db");
}).catch((err)=> {
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Post.deleteMany({});
    await Post.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();


