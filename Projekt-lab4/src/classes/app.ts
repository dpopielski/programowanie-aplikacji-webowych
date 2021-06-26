import Note from '../classes/note';
import Firebase from '../storage/firebase';
import AppStorage from '../storage/storage'

export class App {
  appNotes: Note[] = [];

  divEl: HTMLDivElement;
  addBtn: HTMLButtonElement;
  
  notes: HTMLDivElement;

  noteTitle: HTMLInputElement;
  noteBody: HTMLTextAreaElement;

  storage: AppStorage;

  pinContainer: HTMLDivElement;

  constructor() {
    this.storage = new AppStorage();

    this.getElements();
    this.addEvents();

    this.loadNotes();
  }

  loadNotes() {
    this.storage.getNotes().then((notes) => {
      this.appNotes = notes;
      this.reprintNotes();
    });
  }

  getElements() {
    this.addBtn = document.getElementById('addBtn') as HTMLButtonElement;
    this.notes = document.getElementById('notes') as HTMLDivElement;
    this.noteBody = document.getElementById('noteText') as HTMLTextAreaElement;
    this.noteTitle = <HTMLInputElement>document.getElementById('noteTitle');
    this.pinContainer = document.getElementById("pinnedNotes") as HTMLDivElement;
  }

  addEvents() {
    this.addBtn.addEventListener('click', () => this.addNote());
    
    this.noteBody.addEventListener('input', () => {
      this.noteBody.style.height = '48px';
      this.noteBody.style.height = this.noteBody.scrollHeight + 'px';
    });
  }

  addNote() {
    if (this.noteTitle.value.length === 0  && this.noteBody.value.length === 0) return;
    
    const note = new Note(this.noteTitle.value, this.noteBody.value);
    
    this.appNotes.push(note);
    this.storage.addNote(note);

    this.reprintNotes();

    this.clearNoteCreator();
  }

  reprintNotes() {
    const pinnedNotes = this.appNotes.filter((note: Note) => note.pinned)
    const unpinnedNotes = this.appNotes.filter((note: Note) => !note.pinned)

    this.clearNotes();

    for(let note of pinnedNotes) {
      this.pinContainer.appendChild(note.getElement())
    }

    for(let note of unpinnedNotes) {
      this.notes.appendChild(note.getElement())
    }
  }

  clearNotes() {
    this.notes.innerHTML = '';
    this.pinContainer.innerHTML = '';
  }

  clearNoteCreator() {
    this.noteTitle.value = '';
    this.noteBody.value = '';

    this.noteBody.dispatchEvent(new Event('input'));
  }
  
  deleteNote(id: string) {
    this.appNotes = this.appNotes.filter((note: Note) => note.id !== id);

    this.reprintNotes();

    this.storage.deleteNote(id);
    // console.log(this.appNotes, id);
  }

  pinNote(id: string) {
    const note = this.appNotes.find((note: Note) => note.id === id);

    note.pinned = !note.pinned;
    
    this.storage.updateNote(note);

    this.reprintNotes()
  }
}
