import { StorageType } from "./types";

const CONFIG = {
    // Change the storage type (Local Storage or Firebase Storage)
    STORAGE_TYPE: StorageType.Firebase,
    LOCALSTORAGE_KEY: 'damian-popielski-notatki',

    FIREBASE_CONFIG: {
        apiKey: "AIzaSyB5DlmmSSz5ZiidTLZGqwWR9cmnnUBPymw",
        authDomain: "notekeep-78a04.firebaseapp.com",
        projectId: "notekeep-78a04",
        storageBucket: "notekeep-78a04.appspot.com",
        messagingSenderId: "642080145805",
        appId: "1:642080145805:web:0fff9c21cd6b013536fdc4"
    },
}

export default CONFIG;