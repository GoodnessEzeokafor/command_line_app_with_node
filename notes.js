const fs = require('fs');

// module.exports.addNote = (title, body)=>{
//     var info =  `Title: ${title} 
//     Body: ${body}
//     `;
//     return info;
// }
const fetchNotes = () =>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);   
    
    } catch(e){

    }

}       
const saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


const addNote = (title, body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var dupicateNotes = notes.filter((note)=>{
        return note.title === title;
    });
    if(dupicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
        
    }
};


const getAll = ()=>{
    return "Getting all notes";
};

const getNote=(title)=>{
    var notes = fetchNotes();
    var filtered_notes = notes.filter((note)=>  note.title === title);
    return filtered_notes[0];
};

const removeNote=(title)=>{
    // fetch the note
    var notes =fetchNotes();
    // filter notes, removing the one with title of argument
    var filtered_notes = notes.filter((note)=>{
        return note.title != title;
    });
    // save new notes array
    saveNotes(filtered_notes);
    return notes.length !== filtered_notes.length
};


const logNote = (note)=>{
    console.log('------------')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

}

module.exports = {
    addNote:addNote,
    getAll:getAll,
    getNote:getNote,
    removeNote:removeNote,
    logNote:logNote
}
