import React, { useEffect, useState } from "react";
import { fetchTodos } from "../../stores/glasses-store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCardForm from "../shoppingcardform/ShoppingCardForm";
import Link from "next/link";
import Loading from "../loading/Loading";
import { addBasket,fetchBasket } from "../../stores/basket-store/basketSlice";

export default function ShopContent() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchBasket())
  }, [dispatch]);

  
  const { todos } = useSelector((state) => state.todos);
  const { basket } = useSelector((state) => state.basket);


  if (!Array.isArray(todos)) {
    // Veri yüklenene kadar veya hata alana kadar Loading bileşenini göster
    return <Loading />;
  }

  if (basket === '[]' || !Array.isArray(todos)) {
    // Veri yüklenene kadar veya hata alana kadar Loading bileşenini göster
    return <Loading />;
  }

  const handleAddToBasket = (todo) => {
    const itemToAdd = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      image: todo.image,
      price: todo.price,
      size: todo.size,
      color: todo.color,
      isFeautered: todo.isFeatured,
      isRecommended: todo.isRecommended,
    };
    dispatch(addBasket(itemToAdd));
  };

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
              <p className="text-center font-bold text-lg">{todo.price} $</p>
            </div>
            <div>
              <button
                onClick={() => handleAddToBasket(todo)}
                className="absolute bottom-0 left-0 w-full bg-black text-white px-4 py-2 rounded-b opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0"
              >
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
