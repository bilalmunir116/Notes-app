const chalk=require('chalk')
const getNotes = require('./notes.js')
const yargs=require('yargs')
const { string } = require('yargs')
//customise yargs version
yargs.version('1.1.0')
//add ,remove,read,list

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        getNotes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        getNotes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command: 'list',
    describe: 'lists a note',
    handler(){
        getNotes.listNotes()
    }
})
//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        
        getNotes.readNote(argv.title)
    }
})

yargs.parse()
