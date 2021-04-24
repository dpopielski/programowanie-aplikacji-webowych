export class App {
    inputEl: HTMLInputElement;
    cityName: string;
    mainBtn: HTMLButtonElement;
    weatherBox: HTMLDivElement;
    divContainer: HTMLDivElement;
    divEl: HTMLDivElement;
    div: HTMLDivElement;


    opwApiKey = '5b79fbaa68996f9d274495718e36e03a';

    constructor() {
        this.mainBtn = <HTMLButtonElement>document.getElementById("mainBtn");
        this.divContainer = <HTMLDivElement>document.getElementById("container");
        const closeIcon = <HTMLElement>document.getElementById('closeIcon');
        const arrData: string[] = this.getData();
        const usedTowns: string[] = arrData; 

        for (let elem of arrData) {
            this.generateInfo(elem);
        }

        console.log(usedTowns);
        
        // closeIcon.addEventListener('click', () => {
            
        // })

        this.mainBtn.addEventListener('click', () => {
            let isInclude = false;
            this.cityName = (<HTMLInputElement>document.getElementById("input")).value.toLowerCase();

            for (let elem of usedTowns) {
                elem === this.cityName ? isInclude = true : isInclude;
            }

            if (isInclude) { return console.log("Takie miasto jest już dodane!") };

            this.generateInfo(this.cityName);
            
            usedTowns.push(this.cityName);
            this.saveData([...usedTowns]);
        }) 
        
    }
    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        
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
    generateInfo(city: string) {
        this.getWeather(city)
            .then(data => {
                this.div = document.createElement("div");
                this.div.id = 'weatherBox';
                this.div.innerHTML = `
                    <i id="closeIcon" class="far fa-window-close fa-lg"></i>
                    <span>Miasto: ${data.name}</span>
                    <span>Kraj: ${data.sys.country}</span>
                    <span>Temperatura: ${Math.round(data.main.temp - 273.15)}°C</span>
                    <span>Ciśnienie: ${data.main.pressure}hPa</span>
                    <span>Wiatr: ${data.wind.speed}km/h</span>
                `;
                this.divContainer.appendChild(this.div);
            });       
    }
}