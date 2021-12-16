import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';
import './css/tailwind.css';
import { HomePage } from './Components/Home/Home';
import { ShopPage } from './Components/Shop/Shop';
import reportWebVitals from './reportWebVitals';
//import $ from 'jquery';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
  apiKey: "AIzaSyDlA9Oau1ip5iHUtgltp4q5-MmLeRgYF6Y",
  authDomain: "tenet-9c5b2.firebaseapp.com",
  projectId: "tenet-9c5b2",
  storageBucket: "tenet-9c5b2.appspot.com",
  messagingSenderId: "1016027609833",
  appId: "1:1016027609833:web:a71865b701cc33dc99ce78",
  measurementId: "G-SL8322YMRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
*/


ReactDOM.render(
  <Router>
     <Routes>
	      <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
