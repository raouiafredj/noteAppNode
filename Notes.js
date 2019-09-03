// console.log("start");

const fs=require('fs');
var fetchNotes=() => {

    try{
       
        return JSON.parse(fs.readFileSync('notes.txt'));

    }catch(err){

        return [];

    }

}
var addingNote = (title,body) =>{
    var notes=fetchNotes();
    
   

    var note={
        title,
        body
    };
    

    notes.push(note);
    fs.writeFileSync("notes.txt",JSON.stringify(notes));


}
var removeNote =(title) =>{

const notes=fetchNotes();
var filterednotes=notes.filter((note)=>note.title!==title);
fs.writeFileSync("notes.txt",JSON.stringify(filterednotes));


}

var readNote =(title)=>{

    const notes=fetchNotes();
    var filterednotes=notes.filter((note)=>note.title===title);
    console.log(`Title:${filterednotes[0].title} Body:${filterednotes[0].body}`);

}

var getAll=()=>{

    const notes=fetchNotes();
    console.log(notes);



}
module.exports={

    addingNote,
    removeNote,
    readNote,
    getAll
}