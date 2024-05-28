
import React, { useEffect, useState } from "react";
import { fetchTodos } from "../../stores/glasses-store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCardForm from "../shoppingcardform/ShoppingCardForm";
import Link from "next/link";
import Loading from "../loading/Loading";

export default function ShopContent() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.todos);

  const addToBasket = (todo) => {
    setBasket([...basket, todo]);
    setIsOpen(true);
  };
  if (!Array.isArray(todos)) {
    // Veri yüklenene kadar veya hata alana kadar Loading bileşenini göster
    return <Loading />;
  }
  

  return (
    <div className="ml-20 mr-20">
      <div className="grid grid-cols-5 gap-6">
        {todos?.map((todo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md relative group"
          >
            <Link href={`/product/${todo?.id}`}>
              <img
                className="bg-gray-100 w-full h-auto rounded-t-lg group-hover:translate-y-[-50px] transition-transform duration-300 ease-in-out transform group-hover:scale-60"
                src={todo?.image}
                alt=""
              />
            </Link>
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
    </div>
  );
}
