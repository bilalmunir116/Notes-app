const fs= require('fs');
const { timeLog } = require('console');
const { boolean } = require('yargs');
const { default: chalk } = require('chalk');

const addNote =(title,body)=>
{
    const notes=loadNotes()
    const duplicateNote=notes.find((note)=>note.title===title)

    if(!duplicateNote){
        notes.push({
        title:title,
        body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note added!"))
    }
    else
    {
         console.log(chalk.red.inverse("note title taken!"))
    }

   
}
const saveNotes=(notes)=>
{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJsON)
}
const loadNotes=()=>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return{}
    }
    
}

const removeNote=(title)=>
{
    var check=false;
    const notes=loadNotes()
    const notesToKeep=notes.filter((notes)=>notes.title!==title)
       if(notes.length>notesToKeep.length)
       {
           check=true
       }
 
    saveNotes(notesToKeep)
    if(check===false)
    {
        console.log(chalk.red.inverse('Note Doesnt Exists!'))
    }
    else
    {
        console.log(chalk.green.inverse('Note Removed!'))
    }
}
const listNotes=()=>{

    console.log(chalk.blue.inverse('Listing all your Notes'))
    const notes=loadNotes()
    notes.forEach(notes=> {
        
    console.log(chalk.yellowBright.inverse(notes.title))
    })
}
const readNote=(title)=>{
    const notes=loadNotes()
    const searchNote=notes.find((notes)=> notes.title==title)
    if(!searchNote)
    {
        console.log(chalk.red.inverse('Note Not found!'))
    }
    else
    {
        console.log(chalk.green.inverse(searchNote.title))
        console.log(chalk.yellowBright.inverse(searchNote.body))
    }
}
module.exports ={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
};