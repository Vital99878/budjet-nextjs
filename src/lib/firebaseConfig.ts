import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// Ваши данные конфигурации
const firebaseConfig = {
    apiKey: "AIzaSyBZzLgJLxuP6wbalJigBXDMT-wfYLs2YLo",
    authDomain: "budjet-857d2.firebaseapp.com",
    databaseURL: "https://budjet-857d2.firebaseio.com",
    projectId: "budjet-857d2",
    storageBucket: "budjet-857d2.appspot.com",
    messagingSenderId: "44097507809",
    appId: "1:44097507809:web:c59feb73a753a052e682a0",
    measurementId: "G-38DEJQCNMY",
};
// Инициализация Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();


