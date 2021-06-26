export default class Note {
  id: string;
  noteTitle: string;
  noteText: string;
  pinned: boolean;

  constructor(title: string, body: string, pinned: boolean = false,  id?: string) {
    this.id = id || '' + Math.round(Math.random()*1000000);
    this.noteTitle = title;
    this.noteText = body;
    this.pinned = pinned;
  }

  getElement() {
    const divEl = document.createElement('div');
    divEl.className = 'notes';

    divEl.innerHTML = `
            <a onclick="app.pinNote('${this.id}')" class="notes__inner-pinImg">
              <img src="${this.pinned ? './assets/office-push-pin.png' : './assets/push-pin.png'}" alt="">
            </a>
            <a onclick="app.deleteNote('${this.id}')" class="notes__inner-deleteImg">
              <img src="./assets/delete.png" alt="">
            </a>
            <h3 
                class="notes__inner-title"
            >${this.noteTitle}</h3>
            <pre class="notes__inner-text">${this.noteText}</pre>
        `;

    //styles
    divEl.style.border = '1px solid gray';
    divEl.style.borderRadius = '10px';
    divEl.style.minWidth = '300px';
    divEl.style.maxWidth = 'max-width: calc((100vw - 36px) / 3 - 20px)';
    divEl.style.display = 'flex';
    divEl.style.flexDirection = 'column';
    divEl.style.padding = '10px';
    divEl.style.color = '#e8eaed';
    divEl.style.outline = 'none';

    return divEl;
  }
}
