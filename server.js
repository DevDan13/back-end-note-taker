//Declare my dependencies 
const express = require("express");
const apiRoutes = require("./apiroutes");
const htmlRoutes = require("./htmlroutes");
//creation of specifically an express server
const app = express();

//dynamic port generation needed to upload to heroku
const PORT = process.env.PORT || 8080;


//middleware for data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//required routes placed AFTER the static public line to render the css properly to the page.
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
