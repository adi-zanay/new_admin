var express = require("express");
var app = express();
var port = 2000;
var path = require("path");
var router = express.Router();
var bodyparser = require("body-parser");


app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(bodyparser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/admin", (req, res) => {
    res.render("admin");
});

app.post("/suc_fai", (req, res) => {
    var { name, password } = req.body;
    if (name === 'admin@123' && password === 'admin') {
        res.render("success", {
            username: name,
        });
    } else {
        res.render("failure");
    }
});

app.use("/", router);
app.listen(port, () => {
    console.log("Listening Port....2000");
});