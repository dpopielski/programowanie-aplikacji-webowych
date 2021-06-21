import firebase from 'firebase';
import firebaseConfig from './config';
import IStorage from './IStorage';
import note from './note';


export default class Firebase implements IStorage {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    db = this.firebaseApp.firestore();

    constructor() {
    }
    init?: () => void;
    saveData: (data: note[]) => void;
    loadData: () => note[];

    async addNote(note: any) {
        const res = await this.db.collection('notes').add(note);
    }

    async deleteNote(id: string) {
        const res = await this.db.collection('notes').doc(id).delete();
    }

    async updateNote(id: string, note: any,) {
        const res = await this.db.collection('notes').doc(id).update(note);
    }

    async getNote(id: string) {
        return this.db.collection('notes').doc(id).get().then(res => ({ id: res.id, data: res.data() }));
    }

    async getNotes() {
        return this.db.collection('notes').get().then(res => ({ size: res.size, docs: res.docs }));
    }

}
