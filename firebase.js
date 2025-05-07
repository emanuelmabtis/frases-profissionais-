
// Firebase configuration here (provided by you in previous steps)
const firebaseConfig = {
    apiKey: "AIzaSyAbzjNj1MWrGBl0bbj9wuh_znEh4tK1W-g",
    authDomain: "painel-administrativo-df74b.firebaseapp.com",
    projectId: "painel-administrativo-df74b",
    storageBucket: "painel-administrativo-df74b.firebasestorage.app",
    messagingSenderId: "813567495247",
    appId: "1:813567495247:web:2b969796f3614886266e3a",
    measurementId: "G-S6MWGMFWEB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
