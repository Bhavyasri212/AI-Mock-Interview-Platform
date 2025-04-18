// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBzIN4M6JU22kZshWVtDnVC8ym5IKMUaLc",
    authDomain: "prepwise-e0b09.firebaseapp.com",
    projectId: "prepwise-e0b09",
    storageBucket: "prepwise-e0b09.firebasestorage.app",
    messagingSenderId: "919373785185",
    appId: "1:919373785185:web:c16003d4393294886e6220",
    measurementId: "G-STBM32VRJL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);