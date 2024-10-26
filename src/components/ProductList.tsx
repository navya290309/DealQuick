import React from 'react';
import { Product } from '../types';

interface ProductListProps {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  searchTerm: string;
  category: string;
  selectedBrands: string[];
  selectedPriceRange: string;
  selectedCategories: string[];
  selectedStock: string;
  isLoggedIn: boolean;
  setCurrentPage: (page: string) => void;
}

const products: Product[] = [
  { id: 1, name: 'Lays Classic', price: 20, image: 'src/images/laysclassic.jpeg', description: 'Classic salted potato chips', category: 'featured', brand: 'Lays', productCategory: 'Chips', inStock: true },
  { id: 2, name: 'Kurkure Masala Munch', price: 15, image: 'src/images/Kurkure Masala Munch.jpeg', description: 'Crunchy corn puffs with spicy masala flavor', category: 'featured', brand: 'Kurkure', productCategory: 'Chips', inStock: true },
  { id: 3, name: 'Bingo Mad Angles', price: 25, image: 'src/images/Bingo Mad Angles.jpeg', description: 'Triangle-shaped chips with tangy flavor', category: 'featured', brand: 'Bingo', productCategory: 'Chips', inStock: false },
  { id: 4, name: 'Haldiram\'s Aloo Bhujia', price: 30, image: 'src/images/Haldirams Aloo Bhujia.jpeg', description: 'Spicy potato noodle snack', category: 'featured', brand: 'Haldiram\'s', productCategory: 'Chips', inStock: true },
  { id: 5, name: 'Parle-G Biscuits', price: 10, image: 'src/images/Parle-G Biscuits.jpeg', description: 'Classic glucose biscuits', category: 'featured', brand: 'Parle', productCategory: 'Biscuits', inStock: true },
  { id: 6, name: 'Cadbury Dairy Milk', price: 40, image: 'src/images/Cadbury Dairy Milk.webp', description: 'Spicy potato chips', category: 'featured', brand: 'Uncle Chipps', productCategory: 'Chips', inStock: false },
  { id: 8, name: 'Balaji Wafers', price: 18, image: 'src/images/Balaji Wafers.jpeg', description: 'Thin and crispy potato wafers', category: 'featured', brand: 'Balaji', productCategory: 'Chips', inStock: true },
  { id: 9, name: 'Pringles Sour Cream & Onion', price: 85, image: 'src/images/Pringles Sour Cream & Onion.jpeg', description: 'Flavored potato crisps', category: 'featured', brand: 'Pringles', productCategory: 'Chips', inStock: true },
  { id: 10, name: 'Doritos Nacho Cheese', price: 50, image: 'src/images/Doritos Nacho Cheese.jpeg', description: 'Cheesy corn chips', category: 'featured', brand: 'Doritos', productCategory: 'Chips', inStock: true },
  { id: 11, name: 'Britannia Good Day', price: 25, image: 'src/images/bgd.jpeg', description: 'Buttery cookies', category: 'recommended', brand: 'Britannia', productCategory: 'Biscuits', inStock: true },
  { id: 12, name: 'Haldiram\'s Sev', price: 35, image: 'src/images/hrs.jpeg', description: 'Crunchy gram flour noodles', category: 'recommended', brand: 'Haldiram\'s', productCategory: 'Chips', inStock: true },
  { id: 13, name: 'Maggi Noodles', price: 12, image: 'src/images/mn.jpeg', description: 'Instant noodles', category: 'recommended', brand: 'Maggi', productCategory: 'Noodles', inStock: true },
  { id: 14, name: 'Bourbon Biscuits', price: 20, image: 'src/images/bb.jpeg', description: 'Chocolate cream biscuits', category: 'recommended', brand: 'Britannia', productCategory: 'Biscuits', inStock: false },
  { id: 15, name: 'Amul Kool', price: 25, image: 'src/images/amool.jpeg', description: 'Flavored milk drink', category: 'recommended', brand: 'Amul', productCategory: 'Beverages', inStock: true },
  { id: 16, name: 'Frooti', price: 10, image: 'src/images/frooti.jpeg', description: 'Mango fruit drink', category: 'recommended', brand: 'Parle Agro', productCategory: 'Beverages', inStock: true },
  { id: 17, name: 'Haldiram\'s Mixture', price: 40, image: 'src/images/haldiram_mixture.jpeg', description: 'Spicy snack mix', category: 'recommended', brand: 'Haldiram\'s', productCategory: 'Chips', inStock: true },
  { id: 18, name: 'Lijjat Papad', price: 30, image: 'src/images/lijjat papad.jpeg', description: 'Crispy lentil wafers', category:'recommended', brand: 'Lijjat', productCategory: 'Papad', inStock: false },
  { id: 19, name: 'Chikki', price: 15, image: 'src/images/chikki.jpeg', description: 'Peanut brittle', category: 'recommended', brand: 'Local', productCategory: 'Sweets', inStock: true },
  { id: 20, name: 'Appy Fizz', price: 35, image: 'src/images/fizz.webp', description: 'Sparkling apple drink', category: 'recommended', brand: 'Parle Agro', productCategory: 'Beverages', inStock: true },
];

const ProductList: React.FC<ProductListProps> = ({ 
  addToCart, 
  removeFromCart, 
  searchTerm, 
  category,
  selectedBrands,
  selectedPriceRange,
  selectedCategories,
  selectedStock,
  isLoggedIn,
  setCurrentPage
}) => {
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesProductCategory = selectedCategories.length === 0 || selectedCategories.includes(product.productCategory);
    const matchesStock = selectedStock === '' || 
      (selectedStock === 'in_stock' && product.inStock) || 
      (selectedStock === 'out_of_stock' && !product.inStock);

    let matchesPriceRange = true;
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      matchesPriceRange = product.price >= min && product.price <= max;
    }

    return matchesSearch && matchesCategory && matchesBrand && matchesPriceRange && matchesProductCategory && matchesStock;
  });

  if (filteredProducts.length === 0) {
    return <div className="text-center text-gray-500 mt-8">No products found matching your criteria.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          {product.category && (
            <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-yellow-200 text-white px-2 py-1 rounded-br-lg z-10">
              {product.category === 'featured' ? 'Featured' : 'Recommended'}
            </div>
          )}
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-purple-600 font-bold mb-4">₹{product.price}</p>
            <div className="flex justify-between">
              {isLoggedIn ? (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Buy Now' : 'Out of Stock'}
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPage('login')}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
                >
                  Login to Add Item
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;