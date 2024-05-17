"use client";
import React, { useEffect, useState } from "react";
import { fetchTodos } from "../../stores/glasses-store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCardForm from "../shoppingcardform/ShoppingCardForm";

export default function ShopContent() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.todos);
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
    setIsOpen(true);
  };

  return (
    <div className="ml-20 mr-20">
      <div className="grid grid-cols-5 gap-6">
        {todos?.map((todo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md relative group"
          >
            <a href="#!">
              <img
                className="bg-gray-100 w-full h-auto rounded-t-lg group-hover:translate-y-[-50px] transition-transform duration-300 ease-in-out transform group-hover:scale-60"
                src={todo?.image}
                alt=""
              />
            </a>
            <div className="p-4 text-surface dark:text-dark transition-all duration-300 group-hover:translate-y-[-50px] ">
              <h5 className="mb-2 text-lg font-medium leading-tight">
                {todo?.title}
              </h5>
              <p className="mb-4 font-Caveat text-base text-gray-500">
                {todo?.description}
              </p>
              <p className="text-center font-bold text-lg">{todo.price}</p>
            </div>
            <button
              onClick={() => addToBasket(todo)}
              className="absolute bottom-0 left-0 w-full bg-black text-white px-4 py-2 rounded-b opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>


          <ShoppingCardForm basket={basket} isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <div>
        {basket.length > 0 && (
          <div className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 flex justify-end transition-opacity duration-500 z-50 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white w-4/5 md:w-2/5 lg:w-1/3 h-full p-4 lg:p-8 transform transition-transform duration-500">
              <button
              
                onClick={()=>setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-600"
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
                    <div className="flex items-center justify-between w-full mb-4">
                      <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                        {product.title}
                      </h5>
                      <p className="font-normal flex align-items-center text-base leading-7 text-gray-500 mb-6">
                        Quantity: 1
                      </p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
