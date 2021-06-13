const textarea = document.querySelector("#noteText");
textarea.addEventListener('input', autoResize, false);
     
export function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

 