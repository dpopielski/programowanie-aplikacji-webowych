interface Displays {
  sum: HTMLInputElement;
  avg: HTMLInputElement;
  max: HTMLInputElement;
  min: HTMLInputElement;
}

class CalcApp {
  arrInputData: HTMLInputElement[] = [];
  arrCheckboxData: HTMLInputElement[] = [];

  displays: Displays = <Displays>new Object();
  inputEl: HTMLInputElement;
  userInput: Number;
  inputData: HTMLDivElement;
  inputValue: Number;
  clearButton: HTMLButtonElement;
  loadingEl: HTMLDivElement;
  checkbox: HTMLInputElement;
  input: HTMLInputElement;

  constructor() {
    this.computeData = this.computeData.bind(this);

    this.generateInputs();
    this.removeContent();

    for (let elem of ["sum", "avg", "max", "min"]) {
      this.displays[elem] = document.querySelector(`#${elem}`);
    }
  }

  generateInputs() {
    this.inputData = <HTMLDivElement>document.querySelector(".inputData");
    this.inputEl = <HTMLInputElement>document.getElementById("userInput");
    this.loadingEl = <HTMLDivElement>document.querySelector(".loading-container");

    this.inputEl.addEventListener("focus", () => {
      this.loadingEl.style.display = "flex";
      this.inputData.style.display = "none";
    });

    this.inputEl.addEventListener("blur", () => {
      const amount = +this.inputEl.value;
      this.inputData.innerHTML = "";
      this.arrInputData = [];
      this.loadingEl.style.display = "none";
      this.inputData.style.display = "block";

      for (let i = 0; i < amount; i++) {
        const input = document.createElement("input");
        const checkbox = document.createElement("input");
        input.id = `input${i}`;
        input.type = "number";
        checkbox.id = `checkbox${i}`;
        checkbox.type = "checkbox";
        this.inputData.appendChild(input);
        this.inputData.appendChild(checkbox);
        this.arrInputData.push(input);
        this.arrCheckboxData.push(checkbox);
        console.log(this.arrCheckboxData);
        console.log(this.arrInputData);
        input.addEventListener("input", this.computeData);
      }
      this.computeData();
    });
  }

  computeData() {
    const values = this.arrInputData
      .filter((el) => el.value.length > 0)
      .map((el) => +el.value);
    if (values.length > 0) {
      const sum = values.reduce((a, b) => a + b, 0);
      const avg = sum / values.length;
      const max = Math.max(...values);
      const min = Math.min(...values);

      this.showNewInputs(sum, avg, max, min);
    } else {
      // brak danych
      this.showNewInputs(0, 0, 0, 0);
    }
  }

  showNewInputs(sum: number, avg: number, max: number, min: number) {
    this.displays.sum.value = "" + sum;
    this.displays.avg.value = "" + avg;
    this.displays.max.value = "" + max;
    this.displays.min.value = "" + min;
  }

  removeContent() {
    this.inputEl = <HTMLInputElement>document.getElementById("userInput");
    this.clearButton = <HTMLButtonElement>(
      document.getElementById("clearButton")
    );
    const amount = +this.inputEl.value;

    this.clearButton.addEventListener("click", () => {
      for (let i = 0; i < amount; i++) {
        this.checkbox = <HTMLInputElement>(
          document.getElementById(`checkbox${i}`)
        );
        this.input = <HTMLInputElement>(
          document.getElementById(`input${i}`)
        );
      }

      if (this.checkbox.checked) {
          console.log("true");
          this.input.value = "";
        } else {
          return;
        }
    });
  }
}
const calcApp = new CalcApp();
