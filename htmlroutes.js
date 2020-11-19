//Path Dependencies

const path = require("path");

//exporting to server.js file.
module.exports = function(app) {
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../notes.html"));
    });

    //default to home if not visiting from the notes page.
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"));
    });
};