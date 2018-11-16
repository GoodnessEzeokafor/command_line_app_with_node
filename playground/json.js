const fs = require('fs'); // get the file sytem in Json
var originalNote = {
    title:'The Lord Of THe Rings',
    body: 'Great Workpiece'
}

var originalNoteString = JSON.stringify(originalNote); // convert the json to a string

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
    var note = JSON.parse(noteString); // converts the string to json

console.log(typeof note);
console.log(note.title);
/*
var obj = {
    name: 'Goodness',
};

var stringObj = JSON.stringify(obj);  
    console.log(typeof stringObj);
    console.log(obj);
    console.log(stringObj);


var personString = '{"Name":"Goodness", "Age":18}';
var personJson = JSON.parse(personString);
console.log(typeof personJson);
console.log(personJson);

*/
