import './main.scss';
import { App } from './classes/app';

(window as Window & typeof globalThis & { app: App }).app = new App();