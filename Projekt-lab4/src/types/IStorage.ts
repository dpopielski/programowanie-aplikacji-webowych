import Note from "../classes/note";

export default interface IStorage {
    addNote: (note: Note) => void;
    updateNote: (note: Note) => void;
    deleteNote: (id: string) => void;
    getNotes: () => Promise<Note[]>
}