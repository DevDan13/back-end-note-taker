//get request from notes to see the current notes stored in our database
const fs = require("fs");
const router = require("express").Router();
const uniqid = require("uniqid");

//get request for notes when the get started button has been pressed on index.html. here the note title and 
//text are rendered to the page for the user to type in.
router.get("/api/notes", function (req, res) {
    console.log('hittt')
    fs.readFile("./db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
        //console.log(data);
        res.json(data);
    });
});

//post method for the user to be able to enter their own notes by filling in the title and text fields then clicking the save button.
router.post("/api/notes", function (req, res) {

    // console.log('note', req.body)

    //newData object using spread operator takes in the req.body (note title and note text) and gives an id field which is generated using uniqid
    //to be used for deletion.
    let newData ={
        ...req.body,
        id: uniqid()
    }

    //we read the file first then write to it, updating it with the new note the user saved and posted.
    fs.readFile("./db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
       
        data.push((newData))

        console.log(data);
        fs.writeFile("./db.json", JSON.stringify(data) , function (error){
            res.json(data);
        });
    });
});

//this route deletes the users note by filtering the out the note with a matching id assigned to the note marked for deletion
//by the delete button on the notes.html page. all non matching note id's are allowed to populate the new array updateNotes and are written to the file db.JSON.
router.delete("/api/notes/:id", function(req, res){
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