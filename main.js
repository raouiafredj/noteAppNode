console.log("Hello using process.argv");
// console.log(process.argv);

const fs = require('fs');
    const notes = require('./noteBooks.js');

    var args = process.argv;
    var command = args[2];
    var title = args[4];
    var body = args[4];

    if(command==="add"){
        console.log("adding note");
        console.log(`Note  ${title} has been added`);
        notes.addingNote(title,body);
    }else if(command==="remove"){
        console.log("removing note");
        notes.removeNote(title);
    }else if(command==="read"){
        console.log("reading note");
        notes.readNote(title);
    }else if(command==="list"){
        console.log("listing all notes");
        notes.getAll();
    }else{
        console.log("unknown command");
    }