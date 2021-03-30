export class App {
    clapSound: HTMLAudioElement;
    boomSound: HTMLAudioElement;
    hihatSound: HTMLAudioElement;
    channel1: any[] = [];

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
        this.clapSound = document.querySelector('[data-sound="clap"]');
        this.boomSound = document.querySelector('[data-sound="boom"]');
        this.hihatSound = document.querySelector('[data-sound="hihat"]');
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
            case 'a':
                this.clapSound.currentTime = 0;
                this.clapSound.play();
                break;
            case 's':
                this.boomSound.currentTime = 0;
                this.boomSound.play();
                break;
            case 'd':
                this.hihatSound.currentTime = 0;
                this.hihatSound.play();
                break;
        }
    }
}
