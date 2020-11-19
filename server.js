//Declare my dependencies 
const express = require("express");

//creation of specifically an express server
const app = express();

//dynamic port generation needed to upload to heroku
const PORT = process.env.PORT || 8080;


require("./apiroutes")(app);
require("./htmlroutes")(app);

//middleware for data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
