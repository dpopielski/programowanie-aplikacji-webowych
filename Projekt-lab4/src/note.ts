export class Note {
    noteTitle: string;
    noteText: string;
    divEl: HTMLDivElement = document.createElement("div"); 
    addBtn: HTMLButtonElement;
    notes = <HTMLDivElement>document.getElementById("notes");

    constructor() {
        this.addBtn = <HTMLButtonElement>document.getElementById("addBtn");
        this.addBtn.addEventListener("click", () => {
            this.noteTitle = (<HTMLInputElement>document.getElementById("noteTitle")).value;
            this.noteText = (<HTMLInputElement>document.getElementById("noteText")).value;
            this.divEl.innerHTML = `
            <h2>${this.noteTitle}</h2>
            <p>${this.noteText}</p>
            `;
            this.notes.appendChild(this.divEl);
        });
    }

    createNote() {
        
    }
}



