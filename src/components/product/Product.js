import { fetchTodosById } from "@/stores/glasses-store/todoSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "@/stores/basket-store/basketSlice";
export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  

  useEffect(() => {
    if (id) {
      dispatch(fetchTodosById(id));
    }
  }, [id, dispatch]);

  const { todos } = useSelector((state) => state.todos);

  if (!todos) {
    return <div>Loading...</div>;
  }

  const addToBasket = (product) => {
    const itemToAdd = {
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      size: product.size,
      color: product.color,
      isFeautered: product.isFeatured,
      isRecommended: product.isRecommended,
    };
    dispatch(addBasket(itemToAdd));
  };

 

  return (
    <>
      <div className=" flex justify-center items-center mt-20 ">
        <div>
          <button
            className="absolute top-4 left-4 ml-96 mt-32 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => router.push("/shop")}
          >
            Back to Shop
          </button>
        </div>
        <div className=" border w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg flex">
          {/* Küçük gözlük resimleri */}
          <div className="bg-white-100 flex flex-col items-center space-y-4 w-50 ">
            <img
              className="w-32 h-20  border border-gray-300"
              src={todos?.image}
              alt="main image thumbnail"
            />
            {todos?.relatedImages?.map((img, index) => (
              <img
                key={index}
                className="object-cover border border-gray-300"
                src={img}
                alt={`related ${index}`}
              />
            ))}
          </div>
          {/* Ana gözlük resmi */}
          <div className="flex flex-col  bg-gray-500 items-center mx-4">
            <img
              className="w-full max-w-xs"
              src={todos?.image}
              alt={todos?.title}
            />
          </div>

          {/* Açıklamalar ve seçim öğeleri */}
          <div className="ml-4">
            <h2 className="text-2xl font-bold mb-2">{todos?.title}</h2>
            <p className="text-gray-700 mb-2">{todos?.description}</p>
            <div className="mb-2">
              <select className="block w-60 py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option hidden>-Select Size-</option>
                <option>20mm</option>
                <option>28mm</option>
                <option>36mm</option>
              </select>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Choose Color:</p>
              <div className="flex gap-2 mb-4">
                <button className="w-6 h-6 rounded-full bg-red-500"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500"></button>
                <button className="w-6 h-6 rounded-full bg-green-500"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
                <button className="w-6 h-6 rounded-full bg-purple-500"></button>
                <button className="w-6 h-6 rounded-full bg-black"></button>
              </div>
              <p className="text-3xl font-bold pl-2 pb-3">{todos?.price} $</p>
              <button
                className="bg-black text-white font-bold py-2 px-4 rounded"
                onClick={()=>addToBasket(todos)}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
