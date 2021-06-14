export class Note {
    noteTitle: string;
    noteText: string;
    divEl: HTMLDivElement; 
    addBtn: HTMLButtonElement;
    notes: HTMLDivElement;
    noteBody: HTMLTextAreaElement;

    constructor() {
        this.getElements();
        this.addEvents();
    }
    
    getElements() {
        this.addBtn = document.getElementById("addBtn") as HTMLButtonElement;
        this.notes = document.getElementById("notes") as HTMLDivElement;
        this.noteBody = document.getElementById("noteText") as HTMLTextAreaElement;
        this.noteTitle = (<HTMLInputElement>document.getElementById("noteTitle")).value;
        this.noteText = (<HTMLTextAreaElement>document.getElementById("noteText")).value;
    }

    addEvents() {
        this.addBtn.addEventListener("click", () => this.addNote());

        this.noteBody.addEventListener('input', () => {
            this.noteBody.style.height = '48px';
			this.noteBody.style.height = `${this.noteBody.scrollHeight}px`;
		});
    }

    createNote() {
        this.divEl = document.createElement("div");
        this.divEl.className = "notes";

        this.divEl.innerHTML = `
            <a class="notes__inner-pinImg"><img src="./assets/push-pin.png" alt=""></a>
            <a class="notes__inner-deleteImg"><img src="./assets/delete.png" alt=""></a>
            <h3 
                class="notes__inner-title"
            >${this.noteTitle}</h3>
            <pre 
                class="notes__inner-text"
            >${this.noteText}</pre>
        `;

        //styles
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

    addNote() {
        this.getElements();
        this.createNote();
        this.notes.appendChild(this.divEl);
        this.clearNoteCreator();
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



