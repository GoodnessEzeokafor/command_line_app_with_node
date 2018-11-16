const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const yargs = require('yargs');


const argv = yargs.argv 
var command = argv._[0];

// console.log('Command:', command);
// console.log('Process:', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created');
        notes.logNote(note)
    } else {
        console.log('Note title taken');
        console.log('----------------')
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    }
} else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing${allNotes.length} note(s).`);
    allNotes.forEach((note) =>{
        notes.logNote(note);
    });
} else if (command === 'remove'){
  var note_removed = notes.removeNote(argv.title);
  var message = note_removed ? 'Note Was Removed': 'Note Not Found';
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
        
    } else {
        console.log('Note Not Found');
    }
}



// console.log(process.argv);
