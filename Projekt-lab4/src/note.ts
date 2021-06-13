export class Note {
    noteTitle: string;
    noteText: string;
    divEl: HTMLDivElement; 
    addBtn: HTMLButtonElement;
    notes = <HTMLDivElement>document.getElementById("notes");
    noteBody: HTMLTextAreaElement;

    constructor() {
        this.noteBody = <HTMLTextAreaElement>document.getElementById("noteText");
        this.addBtn = <HTMLButtonElement>document.getElementById("addBtn");
        this.addBtn.addEventListener("click", () => {
            this.noteTitle = (<HTMLInputElement>document.getElementById("noteTitle")).value;
            this.noteText = (<HTMLTextAreaElement>document.getElementById("noteText")).value;
            this.createNote(this.noteTitle, this.noteText);
            this.notes.appendChild(this.divEl);
            this.clearNoteCreator();
        });
        this.noteBody.addEventListener('input', () => {
			this.noteBody.style.height = '48px';
			this.noteBody.style.height = `${this.noteBody.scrollHeight}px`;
		});
        
    }

    createNote(noteTitle: string, noteText: string) {
        this.divEl = document.createElement("div");
        this.divEl.className = "notes";
        // this.preEl.setAttribute('contenteditable', 'false');
        // this.preEl.setAttribute('aria-multiline', 'true');
        // this.preEl.setAttribute('role', 'textbox');
        // this.preEl.setAttribute('dir', 'ltr');
        this.divEl.innerHTML = `
            <a class="notes__inner-img"><img src="./assets/close.png" alt=""></a>
            <h3 
                class="notes__inner-title"
            >${this.noteTitle}</h3>
            <pre 
                class="notes__inner-text"
            >${this.noteText}</pre>
        `;
        this.divEl.style.border = "1px solid gray";
        this.divEl.style.borderRadius = "10px";
        this.divEl.style.minWidth = "300px";
        this.divEl.style.maxWidth = "max-width: calc((100vw - 36px) / 3 - 20px)";
        this.divEl.style.display = "flex";
        this.divEl.style.flexDirection = "column";
        this.divEl.style.padding = "10px";
        this.divEl.style.color = "#e8eaed";
        this.divEl.style.outline = "none";
    }

    clearNoteCreator() {
        this.noteTitle = (<HTMLInputElement>document.getElementById("noteTitle")).value = '';
        this.noteText = (<HTMLTextAreaElement>document.getElementById("noteText")).value = '';
        this.noteBody.dispatchEvent(new Event('input'));
    }

    saveData(data: any) {
        localStorage.setItem('divEl', JSON.stringify(data));
    }

    
}



