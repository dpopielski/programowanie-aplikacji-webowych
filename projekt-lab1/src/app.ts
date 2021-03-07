class CalcApp {
    dataInput1: HTMLInputElement;
    dataInput2: HTMLInputElement;
    dataInput3: HTMLInputElement;
    dataInput4: HTMLInputElement;
    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    minInput: HTMLInputElement;

    constructor() {
        this.startApp();
    }
    

    startApp() {
        this.getInputs();
        this.inputValueEvents();
    }

    getInputs() {
        this.dataInput1 = document.querySelector('#input1');
        this.dataInput2 = document.querySelector('#input2');
        this.dataInput3 = document.querySelector('#input3');
        this.dataInput4 = document.querySelector('#input4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.maxInput = document.querySelector('#max');
        this.minInput = document.querySelector('#min');
    }

    inputValueEvents() {
        this.dataInput1.addEventListener("input", () => this.computeData());
        this.dataInput2.addEventListener("input", () => this.computeData());
        this.dataInput3.addEventListener("input", () => this.computeData());
        this.dataInput4.addEventListener("input", () => this.computeData());
    }

    computeData() {
        const d1 = +this.dataInput1.value;
        const d2 = +this.dataInput2.value;
        const d3 = +this.dataInput3.value;
        const d4 = +this.dataInput4.value;
        const sum = d1 + d2 + d3 + d4;
        const avg = sum / 4;
        const max = Math.max(d1, d2, d3, d4);
        const min = Math.min(d1, d2, d3, d4);

        this.showNewInputs(sum, avg, max, min);
    }

    showNewInputs(sum: number, avg: number, max: number, min: number) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.maxInput.value = max.toString();
        this.minInput.value = min.toString();
    }
}
const calcApp = new CalcApp();