import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import board1 from '../../Assets/board1.png';
import board2 from '../../Assets/board2.png';
import board3 from '../../Assets/board3.png';
import { Header } from '../../Components/Header/Header';
import $ from 'jquery';
import React, { useState, useRef, useEffect } from "react";

function HomePage() {
  useEffect(() => {
    $(".fade").css("opacity", '0');
    $(".fade").css("padding-top", '10px');
    $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        // Check the location of each desired element
        var objectBottom;
        if ($(this).is("img")) {
          objectBottom = $(this).offset().top + $(this).outerHeight() / 4;
        } else {
          objectBottom = $(this).offset().top + $(this).outerHeight();
        }

        // If the element is completely within bounds of the window, fade it in
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).animate({ paddingTop: '0px', opacity: 1 }, 400);
          }
        } /*else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
        }*/
      });
    }).scroll(); //invoke scroll-handler on page-load
  }, [])

  function handleInquiry() {
    window.location = "https://forms.gle/wTUKYyzoArQWafAS9";
  }
  return (
    <div>
      <Header handleInquiry={handleInquiry} />
      <div className="flex flex-wrap my-2">
        <div className="w-1/6 overflow-hidden"></div>
        <div className="h-screen w-2/3">
          <div className="relative items-center">
            <p className="text-xxl md:text-xxl text-gray-900 text-center font-semibold">
              THIS IS TENET
            </p>
          </div>
          <img className="mx-auto" src={board1} />
        </div>
        <div className="w-1/6 overflow-hidden"></div>
      </div>

      <div className="flex mt-2">
        <img className="w-4/12 fade align-top object-contain" src={board3} />
        <div className="w-1/12"></div>
        <div className="w-6/12">
          <p className="fade text-4xl text-gray-900 leading-loose font-bold">
            A skateboard that can keep up with you.
          </p>
          <p className="fade text-xl text-gray-900 font-semibold">
            We’ve implemented cutting edge technology with our new iteration of TENET. Micro transportation has never been as simple, cost-effective, and environmentally friendly.
            <br />
            With constantant updates in range, top speed, and user accesability TENET prides itself in its ability to be the go-to choice for high quality and affordable electric longboards.
          </p>

          <p className="fade text-5xl text-gray-900 leading-relaxed font-bold mt-8">
            15 Miles
          </p>
          <p className="fade text-4xl text-gray-900 font-bold">
            Range On a Single Charge
          </p>

          <p className="fade text-5xl text-gray-900 leading-relaxed font-bold mt-8">
            26 Miles Per Hour
          </p>
          <p className="fade text-4xl text-gray-900 font-bold">
            Top Speed with 600W HUB Motors
          </p>

          <p className="fade text-5xl text-gray-900 leading-relaxed font-bold mt-8">
            $299
          </p>
          <p className="fade text-4xl text-gray-900 font-bold">
            Best Price for Performance
          </p>
        </div>
        <div className="w-1/12"></div>
      </div>
      <div className="flex mt-20 items-center justify-center">
        <p className="fade text-5xl text-gray-900 leading-loose font-bold">
          Don't miss out. Get the Tenet today.
        </p>
      </div>
      <div className="w-full bg-gray-100 mt-8">
        <div className="flex">
          <div className="md:w-1/3 w-1/6"></div>
          <div className="md:w-1/3 w-2/3 bg-white p-16 rounded-lg my-16">
            <div className="text-center">
              <img className="inline h-10 w-auto mx-2" src={logo} />
              <p className="inline fade text-8xl text-gray-900 leading-loose font-bold">
                Tenet
              </p>
            </div>
            <p className="block fade text-4xl text-gray-900 font-bold text-center">
              Become a part of the revolution.
            </p>
            {/*<Link to='/shop'><button className="text-lg block btn bg-black text-white mx-auto my-8 rounded-full py-1 px-8" type="button">Buy Your Tenet</button></Link>*/}
            <button className="text-lg block btn bg-black text-white mx-auto my-8 rounded-full py-1 px-8" type="button" onClick={handleInquiry}>Buy Your Tenet</button>
          </div>
          <div className="md:w-1/3 w-1/6"></div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };

















