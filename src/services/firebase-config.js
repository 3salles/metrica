// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBsANx3jBpwWdsmDYllT1PjKUdQWS2Imds',
  authDomain: 'metrica-c8614.firebaseapp.com',
  projectId: 'metrica-c8614',
  storageBucket: 'metrica-c8614.appspot.com',
  messagingSenderId: '516630853961',
  appId: '1:516630853961:web:dc059c2e8dbe17f6e70298',
  measurementId: 'G-B4Q10P74GG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
