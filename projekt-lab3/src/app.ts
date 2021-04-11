export class App {
    inputEl: HTMLInputElement;
    inputValue: string;
    mainBtn: HTMLButtonElement;

    opwApiKey = '5b79fbaa68996f9d274495718e36e03a';
    constructor() {
        const cityName = this.getCityName();
        this.getCityInfo(cityName);
    }
    async getCityInfo(city: string) {
        const weather = await this.getWeather(this.inputValue);
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
    getCityName() {
        this.mainBtn.addEventListener("click", () => {
            this.inputEl = <HTMLInputElement>document.getElementById("input");
            this.inputValue = ""+this.inputEl.value;
        });
        
        return this.inputValue;
    }
    generateInfo() {
        const divEl = document.createElement('div');
        const spanEl = document.createElement('span');
    }
}