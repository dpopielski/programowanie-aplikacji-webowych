import { Note } from "./note";
import { Firebase } from "./firebase";

// const newNote = {
//     title: 'Second note',
//     content: 'Second note content from code '
// }

export class App {
    
    constructor() {
        
    }
}

const app = new App();
const note = new Note();
const firebase = new Firebase();



// addNote(newNote);
// deleteNote('8N0qLDyGenoxNzkpzf6C');
// deleteNote('X89vUsKLqUNSi4vmE8XS');
// updateNote('BP88t5Un3drgRBiEcDMa', { title: 'Update Note', content: 'Update note content'});

// getNote('BP88t5Un3drgRBiEcDMa').then(res => console.log(res));