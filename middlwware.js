const Post = require("./models/post.js");
const User =  require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");



module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}
