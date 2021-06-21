import note from "./note";
export default interface IStorage {
    init?: () => void;
    saveData: (data: note[]) => void;
    loadData: () => note[];
}