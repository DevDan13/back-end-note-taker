//get request from notes to see the current notes stored in our database
const fs = require("fs");
const router = require("express").Router();
const uniqid = require("uniqid");

router.get("/api/notes", function (req, res) {
    console.log('hittt')
    fs.readFile("./db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
        //console.log(data);
        res.json(data);
    });
});

router.post("/api/notes", function (req, res) {

    // console.log('note', req.body)


    let newData ={
        ...req.body,
        id: uniqid()
    }

    fs.readFile("./db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
       
        data.push((newData))

        console.log(data);
        fs.writeFile("./db.json", JSON.stringify(data) , function (error){
            res.json(data);
        });
    });
});

router.get("/api/notes/:id", function(req, res){
    console.log("my param", req.params.id);

    fs.readFile("./db.json", "utf8", function (error, data) {
        const deleteNote =JSON.parse(data);

        const updateNotes = deleteNote.filter(note => req.params.id !== note.id);

        fs.writeFile("./db.json", JSON.stringify(updateNotes), function(error){
            res.json(updateNotes);
        });
    });
});

module.exports = router;