// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAftzsN1ovhkwZPnCy420y2uS1NMqc5Kz8",
    authDomain: "co-op-tracker-6e9c3.firebaseapp.com",
    databaseURL: "https://co-op-tracker-6e9c3-default-rtdb.firebaseio.com",
    projectId: "co-op-tracker-6e9c3",
    storageBucket: "co-op-tracker-6e9c3.firebasestorage.app",
    messagingSenderId: "694687300884",
    appId: "1:694687300884:web:678d6beabebf6836581601",
    measurementId: "G-MYFMZKSX1S"
};

export const app = initializeApp(firebaseConfig);

// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);