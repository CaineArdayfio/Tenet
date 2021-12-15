import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import board1 from '../../Assets/board1.png';
import board2 from '../../Assets/board2.png';
import board3 from '../../Assets/board3.png';

import React from "react";
//import firebase from "firebase";

const Header = () => {
	return (
		<nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to='/'><img className="block lg:hidden h-10 w-auto mx-2" src={logo}/></Link>
                <Link to='/'><img className="hidden lg:block h-10 w-auto mx-2" src={logo}/></Link>
                <span className="text-white font-bold"><Link to='/'>Tenet</Link></span>
              </div>
              <div className="hidden md:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-light whitespace-nowrap text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page"><Link to="/">Home</Link></a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to='/ask-question'><button className="btn bg-white transition hidden md:block whitespace-nowrap text-black font-bold mx-2 rounded-full py-1 px-8" type="submit">Shop</button></Link>
              <div className="ml-3 relative">
                <div id="profilePhoto">
                  <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://i.imgur.com/h5zbDRY.jpg" alt=""/>
                  </button>
                </div>
                <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  <Link to='/profile'><a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a></Link>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
	)
};


function HomePage() {
  //const firebaseApp = firebase.apps[0];
  //{JSON.stringify(firebaseApp.options, null, 2)} 
  return (
    <div>
      <Header/>
      <div className="flex flex-wrap my-2">
        <div className="w-1/6 overflow-hidden"></div>
        <div className="h-screen w-2/3">
          <div className="relative items-center">
            <p className="text-xxl md:text-xxl text-gray-900 text-center font-semibold">
              THIS IS TENET             
              
            </p>
          </div>
          <img className="mx-auto" src={board1}/>
        </div>
        <div className="w-1/6 overflow-hidden"></div>
      </div>

      <div className="flex mt-2">
        <img className="w-4/12 fade align-top object-contain" src={board3}/>
        <div className="w-1/12"></div>
        <div className="w-6/12">
          <p className="fade text-4xl text-gray-900 leading-loose font-bold">
            A skateboard without boarders.
          </p>
          <p className="fade text-xl text-gray-900 font-semibold">
            We’ve implemented over GHEDION BEYEN CAINE ARDAYFIO TENET WORK BLAHA LBJLKDSJFHDF . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat praesent vel, senectus aliquam. At sit pellentesque egestas integer enim. Neque tellus viverra maecenas amet donec purus aliquam. Quam velit porta justo non massa massa quam id.
          </p>

          <p className="fade text-5xl text-gray-900 leading-relaxed font-bold mt-8">
            36 Hours
          </p>
          <p className="fade text-4xl text-gray-900 font-bold">
            Battery life on a single charge
          </p>

          <p className="fade text-5xl text-gray-900 leading-relaxed font-bold mt-8">
            15 mile range
          </p>
          <p className="fade text-4xl text-gray-900 font-bold">
            Using apple maps or whatever
          </p>

          <p className="fade text-5xl text-gray-900 leading-relaxed font-bold mt-8">
            34 mph
          </p>
          <p className="fade text-4xl text-gray-900 font-bold">
            Top speed in Eco Mode on Tenet
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
              <img className="inline h-10 w-auto mx-2" src={logo}/>
              <p className="inline fade text-8xl text-gray-900 leading-loose font-bold">
                Tenet
              </p>
            </div>
            <p className="block fade text-4xl text-gray-900 font-bold text-center">
              Become a part of the revolution fo electric skateboards or whatever.
              We are almost finished with the people
            </p>
            <Link to='/shop'><button className="text-lg block btn bg-black text-white mx-auto my-8 rounded-full py-1 px-8" type="submit">Buy Your Tenet</button></Link>
          </div>
          <div className="md:w-1/3 w-1/6"></div>
        </div>
      </div>
    </div>
  );
}


function ShopPage() {
  return (
    <div>
      <Header/>
      <div className="flex flex-wrap my-2">
        <div className="w-1/6 overflow-hidden"></div>
        <div className="h-screen w-2/3">
          <div className="relative items-center">
            <p className="text-xxl md:text-xxl text-gray-900 text-center font-semibold">
              THIS IS TENET
            </p>
          </div>
          <img className="mx-auto" src={board1}/>
        </div>
        <div className="w-1/6 overflow-hidden"></div>
      </div>
    </div>
  );
}



/*
<div className="w-full bg-gray-100 mt-8">
  <div className="flex">
    <div className="w-1/2"></div>
    <div className="w-1/2">
      <img className="inline h-10 w-auto mx-2" src={logo}/>
      <p className="inline fade text-8xl text-gray-900 leading-loose font-bold ">
        Tenet
      </p>
      <br/>
      <p className="block fade text-4xl text-gray-900 font-bold ">
        Bundle iCloud+ with up to five other great services.
        And enjoy more for less.
      </p>
      <Link to='/ask-question'><button className="btn bg-blue-500 transition whitespace-nowrap text-white mx-2 rounded-full py-1 px-8" type="submit">Buy Your Tenet</button></Link>
    </div>
  </div>
</div>
</div>
*/
export { HomePage, ShopPage };

















