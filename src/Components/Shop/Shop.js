import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import board1 from '../../Assets/board1.png';
import board2 from '../../Assets/board2.png';
import board3 from '../../Assets/board3.png';
import { Header } from '../../Components/Header/Header';

function ShopPage() {    
    return (
      <div>
        <Header/>
        <div className="flex flex-wrap my-2">
          <div className="w-1/6 overflow-hidden"></div>
          <div className="h-screen w-2/3">
            <div className="relative items-center">
              <p className="text-xxl md:text-xxl text-gray-900 text-center font-semibold">
                <button>Add to cart</button>
              </p>
            </div>            
          </div>
          <div className="w-1/6 overflow-hidden"></div>
        </div>
      </div>
    );
}
  
export { ShopPage };