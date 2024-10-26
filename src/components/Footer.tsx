import React from 'react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About DealQuick</h3>
            <p className="text-gray-400">
              DealQuick connects wholesalers with shop retailers in the Indian
              market for packed food and chocolates.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentPage('home')}
                  className="text-gray-400 hover:text-white transform hover:scale-105 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentPage('products')}
                  className="text-gray-400 hover:text-white transform hover:scale-105 inline-block"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentPage('contact')}
                  className="text-gray-400 hover:text-white transform hover:scale-105 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: dealquick@gmail.com</p>
            <p className="text-gray-400">Phone: +91 7248067995</p>
            <p className="text-gray-400">
              Address: Incubation Centre, Invertis University, Bareilly 243123,
              India
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2024 DealQuick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
