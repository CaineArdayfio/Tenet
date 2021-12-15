import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';
import './css/tailwind.css';
import { HomePage, ShopPage } from './Components/Home/App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


ReactDOM.render(
  <Router>
     <Routes>
	      <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

$(window).on("load",function() {
  $(".fade").css("opacity", '0');
  console.log("Caine");
  $(".fade").css("padding-top", '2em');
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      // Check the location of each desired element
      var objectBottom;
      if($(this).is("img")){
        objectBottom = $(this).offset().top + $(this).outerHeight()/4;
      }else{
        objectBottom = $(this).offset().top + $(this).outerHeight();
      }

      // If the element is completely within bounds of the window, fade it in
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).animate({ paddingTop: '0px', opacity: 1}, 400);
        }
      } /*else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
      }*/
    });
  }).scroll(); //invoke scroll-handler on page-load
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
