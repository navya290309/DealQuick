import React, { useState } from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WholesalerRegistration from './components/WholesalerRegistration';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Cart from './components/Cart';
import { Product } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [productCategory, setProductCategory] = useState('all');
  const [showWholesalerForm, setShowWholesalerForm] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product: Product) => {
    if (isLoggedIn) {
      setCartItems([...cartItems, product]);
    } else {
      setCurrentPage('login');
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleShopNow = () => {
    setCurrentPage('products');
    setProductCategory('all');
  };

  const handleLimitedTimeOffer = () => {
    setCurrentPage('products');
    setProductCategory('recommended');
  };

  const toggleWholesalerForm = () => {
    setShowWholesalerForm(!showWholesalerForm);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header 
        cartItems={cartItems} 
        setCurrentPage={setCurrentPage} 
        toggleWholesalerForm={toggleWholesalerForm}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage handleShopNow={handleShopNow} handleLimitedTimeOffer={handleLimitedTimeOffer} />}
        {currentPage === 'products' && (
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-8">
              <select
                className="mr-4 p-2 border rounded-lg hover:border-purple-500 transition-colors transform hover:scale-105"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="all">All Products</option>
                <option value="featured">Featured</option>
                <option value="recommended">Recommended</option>
              </select>
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 pl-10 pr-4 border rounded-lg hover:border-purple-500 transition-colors transform hover:scale-105"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button
                className="ml-4 p-2 bg-purple-600 text-white rounded-lg flex items-center hover:bg-purple-700 transition-colors transform hover:scale-105"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="mr-2" />
                Filter
              </button>
            </div>
            {filterOpen && (
              <div className="mb-8 p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold mb-2">Filter by:</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold">Brand</h4>
                    {['Lays', 'Kurkure', 'Haldiram\'s', 'Parle', 'Cadbury', 'Maggi'].map(brand => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 transform hover:scale-105"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => {
                            if (selectedBrands.includes(brand)) {
                              setSelectedBrands(selectedBrands.filter(b => b !== brand));
                            } else {
                              setSelectedBrands([...selectedBrands, brand]);
                            }
                          }}
                        /> {brand}
                      </label>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Price Range</h4>
                    <select
                      className="w-full p-2 border rounded transform hover:scale-105"
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                    >
                      <option value="">All Prices</option>
                      <option value="5-10">₹5 - ₹10</option>
                      <option value="10-20">₹10 - ₹20</option>
                      <option value="20-30">₹20 - ₹30</option>
                      <option value="30-40">₹30 - ₹40</option>
                      <option value="40-50">₹40 - ₹50</option>
                      <option value="50-60">₹50 - ₹60</option>
                      <option value="60-70">₹60 - ₹70</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="font-semibold">Category</h4>
                    {['Chips', 'Beverages', 'Chocolate'].map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 transform hover:scale-105"
                          checked={selectedCategories.includes(category)}
                          onChange={() => {
                            if (selectedCategories.includes(category)) {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            } else {
                              setSelectedCategories([...selectedCategories, category]);
                            }
                          }}
                        /> {category}
                      </label>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Stock</h4>
                    <select
                      className="w-full p-2 border rounded transform hover:scale-105"
                      value={selectedStock}
                      onChange={(e) => setSelectedStock(e.target.value)}
                    >
                      <option value="">All</option>
                      <option value="in_stock">In Stock</option>
                      <option value="out_of_stock">Out of Stock</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            <ProductList 
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              searchTerm={searchTerm} 
              category={productCategory}
              selectedBrands={selectedBrands}
              selectedPriceRange={selectedPriceRange}
              selectedCategories={selectedCategories}
              selectedStock={selectedStock}
              isLoggedIn={isLoggedIn}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
        {currentPage === 'contact' && <ContactForm />}
        {currentPage === 'signup' && <SignUp setCurrentPage={setCurrentPage} />}
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} handleLogin={handleLogin} />}
        {currentPage === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} isLoggedIn={isLoggedIn} setCurrentPage={setCurrentPage} />}
        {showWholesalerForm && <WholesalerRegistration onClose={toggleWholesalerForm} />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;