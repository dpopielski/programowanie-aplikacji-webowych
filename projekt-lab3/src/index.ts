import { App } from './app';
import './main.scss';

(window as Window & typeof globalThis & { app: App }).app = new App();