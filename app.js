const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/post");
const path = require("path");
const ejs = require('ejs');
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError.js");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const {isLoggedIn} = require('./middlwware.js');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));




const MONGO_URL = "mongodb://127.0.0.1:27017/movieblog";

main().then(() => {
  console.log("Connected to db");
}).catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};


//root
app.get("/", (req, res) => {
  res.send("root is working");
});

//defining sessionOptions
const sessionOptions= {
  secret: "mysupersecretcode",
  resave:false,
  saveUninitialized: true,
  cookie: { // cookie are used to track the session
      expires: Date.now() + 7 * 24 * 60 *60 * 1000, // presenttime + 7days * 24hrs * 60mins * 60secs * 1000miliseconds
      maxAge: 7 * 24 * 60 *60 *1000,
      httpOnly: true,
  },
};

//using session as a middlewar
app.use(session(sessionOptions)); // it creates session id for the user
app.use(flash()); // flash middleware 

// authentication middlewares
app.use(passport.initialize()); // to initilalize passport 
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

//serializing and deserializing the user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for using variables for passing it to all render.ejs template
app.use((req, res, next)=> {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

//index page route
app.get("/home", wrapAsync( async (req, res) => {
  const allPosts = await Post.find({}).sort({ createdAt: -1 });
  const allSidebarPosts = await Post.find({ category: "sidebar" });
  res.render("./client/home.ejs", { allPosts, allSidebarPosts });
}));

// new route
app.get("/home/new", isLoggedIn,  (req, res)=> {
  res.render("./admin/newpost.ejs");
});

//route for upcoming posts
app.get("/home/upcomingmovies", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const posts = await Post.find({ category: "upcoming" });
  res.render("./client/upcoming.ejs", { posts });
}));

//route for english posts
app.get("/home/englishmovies", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const posts = await Post.find({ category: "english" });
  res.render("./client/english.ejs", { posts });
}));

//route for hindi posts
app.get("/home/hindimovies", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const posts = await Post.find({ category: "hindi" });
  res.render("./client/hindi.ejs", { posts });
}));

//route for nepali posts
app.get("/home/nepalimovies", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const posts = await Post.find({ category: "nepali" });
  res.render("./client/nepali.ejs", { posts });
}));

//route for anime posts
app.get("/home/anime&comics", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const posts = await Post.find({ category: "anime" });
  res.render("./client/anime.ejs", { posts });
}));

//create route
app.post("/home",
wrapAsync (
 async (req, res)=> {
  const newPost =  new Post(req.body.post);
   await newPost.save();
   req.flash("success", "New Post Created!"); 
    res.redirect("/home");
}));

// show route
app.get("/home/:id", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const post = await Post.findById(id);
  if(!post){
    req.flash("error", "Post does not exist!");
    res.redirect("/home");
}
  res.render("./client/show.ejs", { post });
}));


//route for popular posts
app.get("/home/:id/popularposts", wrapAsync ( async (req, res) => {
  let { id } = req.params;
  const post = await Post.findById(id);
  res.render("./client/show.ejs", { post });
}));


//edit route
app.get("/home/:id/edit", isLoggedIn,
   wrapAsync (async(req, res) => {
    let {id}= req.params;
    const post = await Post.findById(id);
    if(!post){
        req.flash("error", "Post does not exist!");
        res.redirect("/home");
    }
    res.render("./admin/edit.ejs", {post});
}));

// update route
app.put("/home/:id", isLoggedIn,
    wrapAsync (async(req, res)=> {
    let {id}= req.params;
    await Post.findByIdAndUpdate(id, {...req.body.post});
    req.flash("success", "Post updated!");
    res.redirect(`/home/${id}`);
}));

//delete route
app.delete("/home/:id", isLoggedIn,
    wrapAsync (async (req, res)=> {
    let {id}= req.params;
    let deletedPost = await Post.findByIdAndDelete(id);
    req.flash("success", "Post Deleted!");
    res.redirect("/home");
}));


// Search route
app.post("/home/search", wrapAsync ( async (req, res) => {
  const searchInput = req.body.searchInput;
  
  try {
    const mathingProducts = await Post.find({ title: { $regex: searchInput, $options: 'i' } });
    const allSidebarPosts = await Post.find({ category: "sidebar" });
    res.render('./client/showsearchdata.ejs', { movies: mathingProducts , allSidebarPosts});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}));



app.get("/signup", (req, res)=> {
  res.render("./user/signup.ejs");
});

// post or add new user to db
app.post("/signup", wrapAsync (async(req, res)=> {
 try {
  let {username, email, password} = req.body;
  const newUser = new User({email, username});
  const registeredUser =  await  User.register(newUser, password);

  // auto login after signup
  req.login(registeredUser, (err)=> {
      if(err){
          return next(err);
      }
      req.flash("success", "You are registered Successfully!");
      res.redirect("/home");
  });  
 } catch (e) {
   req.flash("error", e.message);
   res.redirect("/signup");
 }
}));


//rendering login page
app.get("/login", (req,res)=> {
  res.render("./user/login.ejs");
});


//login to the registered user
app.post("/login", 
passport.authenticate("local", {failureRedirect: "/login", failureFlash:true,}), //passport.authen.. is the middleware to check existing user
async(req, res)=> {
  req.flash("success", "welcome back! you are logged in!");
  res.redirect("/home");
});


//logout user
app.get("/logout", (req, res, next)=> {
  req.logout((err)=> {
      if(err){
        return  next(err);
      }
      req.flash("success", "You are logged out!");
      res.redirect("/home");
  })
});

//for non existing route
app.all("*", (req, res, next)=> {
  next(new ExpressError(404, "Page Not Found!"));
});

// custom error handling
app.use((err, req, res, next) => {
  let {statusCode = 500, message= "something went wrong!"} = err;
  res.render("./error.ejs", {message});
});


app.listen(8080, () => {
  console.log("sever is listening to the port 8080");
});