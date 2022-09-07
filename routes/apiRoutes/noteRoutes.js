const router = require('express').Router();
//creates notes
const CreateNote = require('../../lib/notefunctions');

const {notes} =require('../../db/db.json');

router.get('/notes', (req, res) => {
    let notehistory = notes;
    res.json(notehistory);
    })

router.post('/notes', (req, res) => {
    //set id 
    req.body.id = notes.length.toString();
    let note = CreateNote(req.body, notes);
    res.json(note);
})
 module.exports =router;


