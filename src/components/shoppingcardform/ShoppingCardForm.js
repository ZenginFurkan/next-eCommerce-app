import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "reactstrap";

export default function ShoppingCardForm({ basket = [], isOpen = false, setIsOpen }) {

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    basket.forEach((product) => {
      if (!initialQuantities[product.id]) {
        initialQuantities[product.id] = {
          quantity: 1,
          size: product.size,
          color: product.color,
        };
      }
    });
    setQuantities(initialQuantities);
  }, [basket]);

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: prev[id].quantity + 1,
      },
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: Math.max(prev[id].quantity - 1, 1),
      },
    }));
  };

  const clearBasket = () => {
    // Implement clearBasket functionality if needed
  };

  const calculateSubtotal = () => {
    return basket.reduce((acc, product) => {
      const quantity = quantities[product.id]?.quantity || 0;
      return acc + product.price * quantity;
    }, 0).toFixed(2);
  };

  return (
    <Modal isOpen={isOpen}>
      {basket.length > 0 && (
        <div
          className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 flex justify-end transition-opacity duration-500 z-50 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <div className="bg-white w-4/5 md:w-2/5 lg:w-1/3 h-full p-4 lg:p-8 transform transition-transform duration-500 flex flex-col justify-between">
            <div>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button
                  onClick={clearBasket}
                  className="text-gray-600"
                >
                  Clear Basket
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                My Basket
              </h2>
              {basket.map((product, index) => (
                <div
                  key={index}
                  className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
                >
                  <div className="col-span-12 lg:col-span-2 img box">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-lg:w-full lg:w-[180px]"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-4">
                      {product.title}
                    </h5>
                    <div className="mb-4">
                      <p className="text-gray-500">Quantity: {quantities[product.id]?.quantity}</p>
                      <p className="text-gray-500">Size: {quantities[product.id]?.size}</p>
                      <p className="text-gray-500">Color: {quantities[product.id]?.color}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <button onClick={() => decreaseQuantity(product.id)} className="border px-2">-</button>
                        <p className="mx-2">{quantities[product.id]?.quantity}</p>
                        <button onClick={() => increaseQuantity(product.id)} className="border px-2">+</button>
                      </div>
                      <p className="font-bold">{(product.price * (quantities[product.id]?.quantity || 0)).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-left font-bold text-2xl mt-4">
              Subtotal: ${calculateSubtotal()}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

ShoppingCardForm.propTypes = {
  basket: PropTypes.array,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
