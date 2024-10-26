import React from 'react';
import { Product } from '../types';

interface CartProps {
  cartItems: Product[];
  removeFromCart: (productId: number) => void;
  isLoggedIn: boolean;
  setCurrentPage: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  removeFromCart,
  isLoggedIn,
  setCurrentPage,
}) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          No information please log in to view your cart items
        </h2>
        <button
          onClick={() => setCurrentPage('login')}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
        >
          Log In
        </button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button
          onClick={() => setCurrentPage('products')}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-bold mr-4">₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-bold">Total: ₹{totalAmount}</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
