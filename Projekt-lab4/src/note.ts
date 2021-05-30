export class Note {
    noteTitle: string;
    noteText: string;
    divEl: HTMLDivElement; 
    addBtn: HTMLButtonElement;
    notes = <HTMLDivElement>document.getElementById("notes");

    constructor() {
        this.addBtn = <HTMLButtonElement>document.getElementById("addBtn");
        this.addBtn.addEventListener("click", () => {
            this.noteTitle = (<HTMLInputElement>document.getElementById("noteTitle")).textContent;
            this.noteText = (<HTMLInputElement>document.getElementById("noteText")).textContent;
            this.createNote(this.noteTitle, this.noteText);
            this.notes.appendChild(this.divEl);
        });

        
    }

    createNote(noteTitle: string, noteText: string) {
        this.divEl = document.createElement("div");
        this.divEl.className = "notes__item";
        this.divEl.setAttribute('contenteditable', 'false');
        this.divEl.setAttribute('aria-multiline', 'true');
        this.divEl.setAttribute('role', 'textbox');
        this.divEl.setAttribute('dir', 'ltr');
        this.divEl.innerHTML = `
            <div 
                class="notes__inner-title"
                contenteditable="false"
                aria-multiline="true"
                role="textbox"

            >${this.noteTitle}</div>
            <div 
                class="notes__inner-text"
                contenteditable="false"
                aria-multiline="true"
                role="textbox"
            >${this.noteText}</div>
        `;
        this.divEl.style.border = "1px solid #fff";
        this.divEl.style.minWidth = "50px";
        this.divEl.style.display = "block";
        this.divEl.style.padding = "10px";
        this.divEl.style.letterSpacing = ".01428571em";
        this.divEl.style.color = "#e8eaed";
        this.divEl.style.outline = "none";
        this.divEl.style.unicodeBidi = "isolate";
        this.divEl.style.overflow = "visible";

        // this.divEl.style.overflowWrap = "anywhere";
        // this.divEl.style.overflow = "scroll";
        // this.divEl.style.borderRadius = "10px";
        // this.divEl.style.padding = "10px"
        // this.divEl.style.minHeight = "80px"
        // this.divEl.style.maxHeight = "200px"
        // this.divEl.style.minWidth = "100px"
        // this.divEl.style.maxWidth = "250px"
    }
    saveData(data: any) {
        localStorage.setItem('divEl', JSON.stringify(data));
    }
}



