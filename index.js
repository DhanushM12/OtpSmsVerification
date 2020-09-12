require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

var index = require("./routes/index");
var register = require("./routes/register");
var verify = require("./routes/verify");
var status = require("./routes/status");
//set up for view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "assets")));

//app.get("/", (req, res) => res.send("<h1>AdmitKard OTP Verification</h1>"));
app.use(index);
app.use(register);
app.use(verify);
app.use(status);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
