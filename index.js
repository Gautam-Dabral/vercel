const express = require('express');
const ejs = require('ejs');
const path = require('path');

const PORT = process.env.PORT || 3000 ;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.route("/")
.get( (req, res) => {
    res.render("home", {root: path.join(__dirname, 'views')})
})

app.route("/about")
.get( (req, res) => {
    res.render("about", {root: path.join(__dirname, 'views')})
})

app.route("/contact")
.get( (req, res) => {
    res.render("contact", {root: path.join(__dirname, 'views')})
})

module.exports = app;

app.listen(PORT, () => {console.log(`server started at port : ${PORT}`);});