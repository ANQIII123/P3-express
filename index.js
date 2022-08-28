const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
// const homepageRoutes = require('./routes/homepage');
require("dotenv").config();

var cors = require('cors');
const bodyParser = require('body-parser');



// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

app.use(cors())
app.use(bodyParser.json());

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
const serverRoute = require('./routes/server');

async function main() {
  app.use('/', serverRoute);
  app.use('/homepage', homepageRoutes);

}

main();



app.listen(3000, () => {
  console.log("Server has started on port 3000");
});

