interface Displays {
    sum: HTMLInputElement;
    avg: HTMLInputElement;
    max: HTMLInputElement;
    min: HTMLInputElement;
}

class CalcApp {
    arrInputData: HTMLInputElement[] = [];
    displays: Displays;

    constructor() {
        this.computeData = this.computeData.bind(this);
        this.startApp();
    }
    
    startApp() {
        this.getInputs();
        this.inputValueEvents();
    }

    getInputs() {
        for (let i = 0; i < 4; i++) {
            this.arrInputData.push(<HTMLInputElement>document.querySelector(`#input${i}`));
        }

        // for (let elem of ["sum", "avg", "max", "min"]) {
        //     this.displays[elem] = document.querySelector(`#${elem}`)
        // }

        for (let elem in this.displays) {
            this.displays[elem] = document.querySelector(`#${elem}`)
        }
    }

    inputValueEvents() {
        for (let element of this.arrInputData) {
            element.addEventListener("input", this.computeData);
        }
    }

    computeData() {
        const values = this.arrInputData.filter(el => el.value.length > 0).map(el => +el.value);
        const sum = values.reduce((a, b) => a + b);
        const avg = sum / values.length;
        const max = Math.max(...values);
        const min = Math.min(...values);

        this.showNewInputs(sum, avg, max, min);
    }

    showNewInputs(sum: number, avg: number, max: number, min: number) {
        this.displays.sum.value = ""+sum;
        this.displays.avg.value = ""+avg;
        this.displays.max.value = ""+max;
        this.displays.min.value = ""+min;
    }
}
const calcApp = new CalcApp();