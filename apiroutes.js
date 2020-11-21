//get request from notes to see the current notes stored in our database
const fs = require("fs");
const router = require("express").Router();
const uuid = require("uuid");

router.get("/api/notes", function (req, res) {
    console.log('hittt')
    fs.readFile("./db.json", "utf8", (error, data) => {
        data = JSON.parse(data);
        console.log(data);
        res.json(data);
    });
});

router.post("/api/notes", function (req, res) {

    console.log('note', req.body)


    let newData ={
        ...req.body,
        id: 1
    }

    fs.readFile("./db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
       
        data.push((newData))

        fs.writeFile("./db.json", JSON.stringify(data) , function (error){
            res.json(data);
        })
    })
})

module.exports = router;