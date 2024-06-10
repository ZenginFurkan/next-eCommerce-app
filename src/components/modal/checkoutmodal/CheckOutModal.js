
import React from 'react'
export default function CheckOutModal({ onContinueShopping, onSignIn }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <p className="mb-4 text-lg">Choose an option:</p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onContinueShopping}
                        className="bg-white text-black border border-black px-4 py-2 rounded"
                    >
                        Continue Shopping
                    </button>
                    <button
                        onClick={onSignIn}
                        className="bg-black text-white px-4 py-2 rounded"
                    >
                        Sign in to Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

