const express = require('express');

const PORT = process.env.PORT || 3000 ;

const app = express();

app.use(express.static("public"));

app.route("/")
.get( (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname, 'public')})
})

module.exports = app;

app.listen(PORT, () => {console.log(`server started at port : ${PORT}`);});