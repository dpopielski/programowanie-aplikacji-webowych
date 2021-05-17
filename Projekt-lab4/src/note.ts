export class Note {
    noteTitle = <HTMLInputElement>document.getElementById("noteTitle");
    divEl: HTMLDivElement = document.createElement("div"); 
    addBtn = <HTMLButtonElement>document.getElementById("addBtn");
    notes = <HTMLDivElement>document.getElementById("notes");

    constructor() {
        this.addBtn.addEventListener("click", () => {
            const title = this.noteTitle.value;
            this.divEl.innerText = title;
            this.notes.appendChild(this.divEl);
        });
    }

    getTitle(): string {
        return this.noteTitle.value;
    }

    createNote() {
        
    }
}



