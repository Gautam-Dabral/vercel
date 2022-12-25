const express = require('express');
const ejs = require('ejs');
const path = require('path');

const PORT = process.env.PORT || 3000 ;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.route("/")
.get( (req, res) => {
    res.render("index", {root: path.join(__dirname, 'views')})
})

module.exports = app;

app.listen(PORT, () => {console.log(`server started at port : ${PORT}`);});