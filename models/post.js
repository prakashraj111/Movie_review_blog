const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    releasedDate: {
        type: String,
    },
    language: {
        type: String,
    },
    duration: {
        type: String,
    },
    genre: {
        type: String,
    },
    director: {
        type: String,
    },
    producer: {
        type: String,
    },
    cast: {
        type: String,
    },
    description: {
        type: String
    },
    category: {
        type: String,
    },
    image: {
        type:String,
        default: "https://res.cloudinary.com/djk95mfpe/image/upload/v1700232463/wanderlust_DEV/cnnqx1orafnp0jxllii3.png",

        set: (v)=> v===""? "https://res.cloudinary.com/djk95mfpe/image/upload/v1700232463/wanderlust_DEV/cnnqx1orafnp0jxllii3.png": v,
    },
    createdAt: {
        type : Date,
        default: Date.now(),
    }, 
});



const Post = mongoose.model("Post", postSchema);
module.exports = Post;