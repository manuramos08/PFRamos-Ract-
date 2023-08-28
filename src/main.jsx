import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlPp_P0GgEi2c19uAcYReG6eHm07dXmZg",
    authDomain: "el-sol-piletas.firebaseapp.com",
    projectId: "el-sol-piletas",
    storageBucket: "el-sol-piletas.appspot.com",
    messagingSenderId: "377854929266",
    appId: "1:377854929266:web:60eda0faae6946352e95eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
