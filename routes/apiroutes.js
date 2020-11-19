//get request from notes to see the current notes stored in our database
const fs = require("fs");
module.exports = function(app) {
    app.get("/api/notes", function(req, res){
        fs.readFile(__dirname,"../db.json", function(err, data) {
            if (err) throw err;
            const readNotes = JSON.parse(data);
            return res.JSON(readNotes);
        });
    });


};