const KEYS = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

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
    channel2: any[] = [];
    channel3: any[] = [];
    drumPadBtn: HTMLButtonElement;
    channel1Start: number;
    channel1Recording: boolean = false;

    constructor() {
        this.appStart();
    }

    appStart() {
        this.onKeyDown = this.onKeyDown.bind(this);
        window.addEventListener('keydown', this.onKeyDown);
        const btnPlayChannel1 = document.querySelector('#playChannel1');
        btnPlayChannel1.addEventListener('click', () => this.onPlayChannel1());
        const btnPlayChannel2 = document.querySelector('#playChannel2');
        btnPlayChannel2.addEventListener('click', () => this.onPlayChannel2());
        const btnPlayChannel3 = document.querySelector('#playChannel3');
        btnPlayChannel3.addEventListener('click', () => this.onPlayChannel3());
        // this.playSoundOnClick();
        this.getAudioTags();
        const btnRec1 = document.getElementById('recBtn1');
        btnRec1.addEventListener('click', () => this.handleRec1());
        const btnRec2 = document.getElementById('recBtn2');
        const btnRec3 = document.getElementById('recBtn3');
        this.playSoundOnClick();
    }

    handleRec1() {
        this.channel1Start = Date.now();
        this.channel1Recording = !this.channel1Recording;
        document.getElementById('recStatus1').innerText = this.channel1Recording ? 'On' : 'Off';
        if (this.channel1Recording) {
            this.channel1 = [];
        }
    }

    handleRec2() {

    }

    handleRec3() {

    }

    onPlayChannel1(): void {
        console.log(this.channel1);
        this.channel1.forEach(sound => {
            setTimeout(() => this.playSound(sound.key), sound.time);
        });
    }

    onPlayChannel2(): void {
        this.channel2.forEach(sound => {
            setTimeout(() => this.playSound(sound.key), sound.time);
        });
    }

    onPlayChannel3(): void {
        this.channel3.forEach(sound => {
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
        this.playSound(key);
    }

    playSound(key: string) {
        if (this.channel1Recording) {
            this.channel1.push({ key, time: Date.now() - this.channel1Start });
        }

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

    playSoundOnClick() {
        for (let i = 1; i <= 9; i++) {
            const soundBtn = document.querySelector(`#soundBtn${i}`);
            soundBtn.addEventListener('click', () => {
                this.playSound(KEYS[i]);
            })
            soundBtn.addEventListener('mouseup', (e) => {
                setTimeout(() => (e.target as HTMLButtonElement).blur(), 100);
            })
        }
    }
}
