//Path Dependencies
const path = require("path");
const router = require("express").Router();

//exporting to server.js file.
router.get("/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//default to home if not visiting from the notes page.
router.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;