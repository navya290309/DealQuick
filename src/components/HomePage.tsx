import React from 'react';
import { Clock, Phone } from 'lucide-react';

interface HomePageProps {
  handleShopNow: () => void;
  handleLimitedTimeOffer: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  handleShopNow,
  handleLimitedTimeOffer,
}) => {
  return (
    <div className="bg-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
              Discover Your Favorite Snacks at DealQuick Smart Shop
            </h1>
            <p className="text-xl text-purple-700 mb-6">
              Explore a wide range of snacks and packed food tailored for Indian
              retail.
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                onClick={handleShopNow}
              >
                Shop Now
              </button>
              <button
                className="bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
                onClick={handleLimitedTimeOffer}
              >
                Limited Time Offer
              </button>
            </div>
            <div className="flex mt-8 space-x-8">
              <div className="flex items-center">
                <Clock className="text-purple-600 mr-2" />
                <span className="text-purple-700">
                  Monday-Saturday, 9AM-5PM
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-purple-600 mr-2" />
                <span className="text-purple-700">+91 7248067995</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="src\images\vareityofsnacks.jpg"
              alt="Snacks variety"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-3 gap-8 text-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-purple-900">10+</h2>
              <p className="text-purple-700">
                Snack brands and varieties available
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-purple-900">100%</h2>
              <p className="text-purple-700">Genuine wholesale products</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-purple-900">150+</h2>
              <p className="text-purple-700">Affordably priced snacks</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            Explore Our wide Snack Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="src\images\vastoptions.jpg"
                alt="Vast options"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Vast options
              </h3>
              <p className="text-purple-700">
                Discover numerous snack options to choose from, including chips,
                chocolates, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Exclusive Offers
              </h3>
              <p className="text-purple-700">
                Enjoy deals on assorted snacks for every occasion, just for you.
              </p>
              <h3 className="text-xl font-semibold text-purple-900 mt-4 mb-2">
                User-Friendly Interface
              </h3>
              <p className="text-purple-700">
                Navigate easily through our intuitive website designed for
                efficient shopping.
              </p>
              <h3 className="text-xl font-semibold text-purple-900 mt-4 mb-2">
                Responsible Delivery
              </h3>
              <p className="text-purple-700">
                Get your snacks at your doorstep with our reliable delivery
                service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            Featured Snacks
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                Choose from assorted flavors and brands to satisfy every taste
                bud.
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-purple-800">
                    Varieties of Chips
                  </h4>
                  <p className="text-purple-700">Chutney & Spicy</p>
                </li>
                <li>
                  <h4 className="font-semibold text-purple-800">
                    Classic Snacks
                  </h4>
                  <p className="text-purple-700">
                    Savor the classic taste of beloved snacks at affordable
                    prices.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-purple-800">
                    Unique Flavors
                  </h4>
                  <p className="text-purple-700">
                    Explore innovative flavors that are hard to find elsewhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="src\images\familyes.jpg"
                alt="Family enjoying snacks"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
