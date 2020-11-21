//Declare my dependencies 
const express = require("express");
const apiRoutes = require("./apiroutes");
const htmlRoutes = require("./htmlroutes");
const fs = require("fs");
//creation of specifically an express server
const app = express();

//dynamic port generation needed to upload to heroku
const PORT = process.env.PORT || 8080;




// require("./apiroutes")(app);
// require("./htmlroutes")(app);

//middleware for data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.get('/api/notes', function(req,res){
//   fs.readFile("./db.json", "utf8", (error, data) => {
//    data = JSON.parse(data);
//     console.log(data);
//     res.json(data);
// });
// })

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
