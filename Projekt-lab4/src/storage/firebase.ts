import firebase from 'firebase';
import CONFIG from '../config';
import IStorage from '../types/IStorage';
import Note from '../classes/note';

export default class Firebase implements IStorage {
  firebaseApp = firebase.initializeApp(CONFIG.FIREBASE_CONFIG);
  db = this.firebaseApp.firestore();
  notes = this.db.collection('notes');

  async updateNote(note: Note) {
    await this.notes
      .where('id', '==', note.id)
      .get()
      .then(async (query) => {
        query.forEach(async doc => await this.notes.doc(doc.id).update({...note}))
      });
  }

  async addNote(note: Note) {
    await this.notes.add({...note});
  }

  async deleteNote(id: string) {
    await this.notes
      .where('id', '==', id)
      .get()
      .then(async (query) => {
        query.forEach(async doc => await this.notes.doc(doc.id).delete())
      });
  }

  async getNotes() {
    const notes = [] as Note[];
      await this.notes
        .get()
        .then((query) =>
            query.forEach((doc) => {
                const note = doc.data() as Note;
                notes.push(new Note(note.noteTitle, note.noteText, note.pinned, note.id))
            })
        )
    return notes;
  }
}
