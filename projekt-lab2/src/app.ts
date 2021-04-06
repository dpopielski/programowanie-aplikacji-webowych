export class App {
    boomSound: HTMLAudioElement;
    clapSound: HTMLAudioElement;
    hihatSound: HTMLAudioElement;
    kickSound: HTMLAudioElement;
    openhatSound: HTMLAudioElement;
    rideSound: HTMLAudioElement;
    snareSound: HTMLAudioElement;
    tinkSound: HTMLAudioElement;
    tomSound: HTMLAudioElement;

    channel1: any[] = [];
    drumPadBtn: HTMLButtonElement;

    constructor() {
        this.appStart();
    }

    appStart(): void {
        this.onKeyDown = this.onKeyDown.bind(this);
        window.addEventListener('keydown', this.onKeyDown);
        const btnPlayChannel1 = document.querySelector('#playChannel1');
        btnPlayChannel1.addEventListener('click', this.onPlayChannel1);
        this.getAudioTags();
    }

    onPlayChannel1(): void {
        this.channel1.forEach(sound => {
            setTimeout(() => this.playSound(sound.key), sound.time);
        });
    }

    getAudioTags() {
        this.boomSound = document.querySelector('[data-sound="boom"]');
        this.clapSound = document.querySelector('[data-sound="clap"]');
        this.hihatSound = document.querySelector('[data-sound="hihat"]');
        this.kickSound = document.querySelector('[data-sound="kick"]');
        this.openhatSound = document.querySelector('[data-sound="openhat"]');
        this.rideSound = document.querySelector('[data-sound="ride"]');
        this.snareSound = document.querySelector('[data-sound="snare"]');
        this.tinkSound = document.querySelector('[data-sound="tink"]');
        this.tomSound = document.querySelector('[data-sound="tom"]');
    }

    onKeyDown(ev: KeyboardEvent): void {
        const key = ev.key;
        const time = ev.timeStamp;
        this.channel1.push({ key, time });
        this.playSound(key);
        console.log(this.channel1);
    }

    playSound(key: string) {
        switch (key) {
            case 'q':
                this.boomSound.currentTime = 0;
                this.boomSound.play();
                break;
            case 'w':
                this.clapSound.currentTime = 0;
                this.clapSound.play();
                break;
            case 'e':
                this.hihatSound.currentTime = 0;
                this.hihatSound.play();
                break;
            case 'a':
                this.kickSound.currentTime = 0;
                this.kickSound.play();
                break;
            case 's':
                this.openhatSound.currentTime = 0;
                this.openhatSound.play();
                break;
            case 'd':
                this.rideSound.currentTime = 0;
                this.rideSound.play();
                break;
            case 'z':
                this.snareSound.currentTime = 0;
                this.snareSound.play();
                break;
            case 'x':
                this.tinkSound.currentTime = 0;
                this.tinkSound.play();
                break;
            case 'c':
                this.tomSound.currentTime = 0;
                this.tomSound.play();
                break;
        }
    }
}
