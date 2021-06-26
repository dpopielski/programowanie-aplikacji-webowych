import CONFIG from '../config';
import Note from '../classes/note';
import { StorageType } from '../types';
import Firebase from './firebase';
import IStorage from '../types/IStorage';
import LocalStorage from './localstorage';

export default class Storage implements IStorage {
  storage: IStorage;

  constructor() {
    this.storage =
      CONFIG.STORAGE_TYPE === StorageType.LocalStorage
        ? new LocalStorage()
        : new Firebase();
  }

  addNote(note: Note) {
    this.storage.addNote(note);
  }
  updateNote(note: Note) {
    this.storage.updateNote(note);
  }
  deleteNote(id: string) {
    this.storage.deleteNote(id);
  }
  getNotes() {
    return this.storage.getNotes();
  }
}
