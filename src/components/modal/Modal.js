import React from "react";

const Modal = ({ isBasketOpen, onClose, children }) => {
  if (!isBasketOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
      {children}
    </div>
  );
};

export default Modal;
