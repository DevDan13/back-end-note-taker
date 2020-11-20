//get request from notes to see the current notes stored in our database
const fs = require("fs");
const router = require("express").Router();


router.get("/api/notes", function (req, res) {
    fs.readFile("./db.json", "utf8", (error, data) => {
        data = JSON.parse(data);
        console.log(data);
        res.JSON(data);
    });
});

router.post("/api/notes", function (req, res) {

    fs.readFile("./db.Json", "utf8", function (req, res) {
        data = JSON.parse(data);
    })
})

moduke.exports = router;