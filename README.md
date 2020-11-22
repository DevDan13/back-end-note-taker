# back-end-note-taker

This note taker project was given front end code to start. The backend code required to run the code properly has been developed using express.

```bash
npm install express
```

The backend is seperated into three files server.js, htmlroutes.js, and apiroutes.js. the route fles are exported into the server,js file.

Once the three files are linked the terminal is used to run the server to allow local host to serve the backend to the html files and index.js

The following command is used to run the server using nodemon.  This was done by creating the script tag dev after installing nodemon.

```bash
npm run dev
```

Now our server can restart and update with each save of a file.

The /notes route got the notes ontp the page upon loading up. the notes are placed to the right of the file with delete buttons, and the note title and 
note text fields are left open ready to acceept user input.

Once the user inputs data for both note fields (title and text) ad clicks the save button, the /notes page is updated with the users note to the right of the screen.

When a user clicks a note for deletion using the trash can icon, the id each note is given upon creation is used to filter it out of an array as written in the app.delete inscructions written in apiroutes.js.

These unique id's are written using the uniqid package.

```bash
npm install uniqid
```

Every note is given a random id by uniqid  and it is singled out and not populated into the new array by the .filter method.

## Demo Link

<br>

https://github.com/DevDan13/back-end-note-taker

<br>

## Demo Gif 
<br>

![DemoGif](\public\assets\gif\backendnotetaker.gif)