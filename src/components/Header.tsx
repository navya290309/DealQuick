import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface HeaderProps {
  cartItems: Product[];
  setCurrentPage: (page: string) => void;
  toggleWholesalerForm: () => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, setCurrentPage, toggleWholesalerForm, isLoggedIn, handleLogout }) => {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer bg-purple-700 border-2 border-transparent hover:border-white rounded px-2 py-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105" onClick={() => setCurrentPage('home')}>DealQuick</h1>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-purple-200 bg-purple-700 border-2 border-transparent hover:border-white rounded px-2 py-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={() => setCurrentPage(item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="hover:text-purple-200 bg-purple-700 border-2 border-transparent hover:border-white rounded px-2 py-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ml-8"
                onClick={toggleWholesalerForm}
              >
                Become a Wholesalers
              </a>
            </li>
            {isLoggedIn ? (
              <li>
                <a
                  href="#"
                  className="hover:text-purple-200 bg-purple-700 border-2 border-transparent hover:border-white rounded px-2 py-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a
                  href="#"
                  className="hover:text-purple-200 bg-purple-700 border-2 border-transparent hover:border-white rounded px-2 py-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={() => setCurrentPage('login')}
                >
                  Account
                </a>
              </li>
            )}
          </ul>
        </nav>
        <div className="relative cursor-pointer bg-purple-700 border-2 border-transparent hover:border-white rounded p-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105" onClick={() => setCurrentPage('cart')}>
          <ShoppingCart className="h-6 w-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;