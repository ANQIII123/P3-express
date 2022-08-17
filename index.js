const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
// const homepageRoutes = require('./routes/homepage');
require("dotenv").config();


// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);


const homepageRoutes = require('./routes/homepage');

async function main() {
  app.use('/', homepageRoutes);
  console.log("welcome to homepage")
}

main();

app.listen(3000, () => {
  console.log("Server has started");
});

