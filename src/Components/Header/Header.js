import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
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
              {/*<Link to='/shop'><button className="btn bg-white transition hidden md:block whitespace-nowrap text-black font-bold mx-2 rounded-full py-1 px-8" type="submit">Shop</button></Link>*/}
              <button className="btn bg-white transition hidden md:block whitespace-nowrap text-black font-bold mx-2 rounded-full py-1 px-8" type="submit" onClick={props.handleInquiry}>Submit an Inquiry</button>
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

export { Header };

