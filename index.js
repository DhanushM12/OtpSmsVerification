const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//set up for view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
