interface Displays {
	sum: HTMLInputElement;
	avg: HTMLInputElement;
	max: HTMLInputElement;
	min: HTMLInputElement;
}

class CalcApp {
	arrInputData: HTMLInputElement[] = [];
	displays: Displays = <Displays>new Object();
	inputEl: HTMLInputElement;
	userInput: Number;
	inputData: HTMLDivElement;
	inputValue: Number;

	constructor() {
		this.computeData = this.computeData.bind(this);

		this.generateInputs();

		for (let elem of ['sum', 'avg', 'max', 'min']) {
			this.displays[elem] = document.querySelector(`#${elem}`);
		}
	}

	generateInputs() {
		this.inputData = <HTMLDivElement>document.querySelector('.inputData');
		this.inputEl = <HTMLInputElement>document.getElementById('userInput');

		this.inputEl.addEventListener('input', () => {
			const amount = parseInt(this.inputEl.value);
			this.inputData.innerHTML = '';
			this.arrInputData = [];
			for (let i = 0; i < amount; i++) {
				const input = document.createElement('input');
				input.type = 'number';
				this.inputData.appendChild(input);
				this.arrInputData.push(input);
				input.addEventListener('input', this.computeData);
			}
			this.computeData();
		});
	}

	computeData() {
		const values = this.arrInputData.filter((el) => el.value.length > 0).map((el) => +el.value);
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
		console.log(this.displays);
		this.displays.sum.value = '' + sum;
		this.displays.avg.value = '' + avg;
		this.displays.max.value = '' + max;
		this.displays.min.value = '' + min;
	}
}
const calcApp = new CalcApp();
