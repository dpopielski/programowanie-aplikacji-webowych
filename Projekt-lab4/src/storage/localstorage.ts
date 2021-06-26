import IStorage from '../types/IStorage';
import Note from '../classes/note';
import CONFIG from '../config';

export default class LocalStorage implements IStorage {
  addNote(note: Note) {
    this.getNotes().then((notes) => {
      localStorage.setItem(CONFIG.LOCALSTORAGE_KEY, JSON.stringify([...notes, note]));
    });
  }

  deleteNote(id: string) {
    this.getNotes().then((notes) => {
      localStorage.setItem(
        CONFIG.LOCALSTORAGE_KEY,
        JSON.stringify(notes.filter((note: Note) => note.id !== id)),
      );
    });
  }

  updateNote(note: Note) {
    this.getNotes().then((notes) => {
      localStorage.setItem(CONFIG.LOCALSTORAGE_KEY, JSON.stringify([...notes.filter((_note: Note) => _note.id !== note.id), note]));
    });
  }
  
  getNotes() {
    return new Promise<Note[]>((resolve) => {
      const lsValue = localStorage.getItem(CONFIG.LOCALSTORAGE_KEY);
      const notes = lsValue ? JSON.parse(lsValue) : [];
      
      resolve(notes.map((note: Note) => new Note(note.noteTitle, note.noteText, note.pinned, note.id)));
    });
  }
}
