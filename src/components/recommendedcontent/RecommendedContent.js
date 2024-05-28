import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isRecommended } from "../../stores/glasses-store/todoSlice";
import Link from "next/link";
import Loading from "../loading/Loading";
export default function RecommendedContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isRecommended());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  if (!Array.isArray(todos)) {
    // Veri yüklenene kadar veya hata alana kadar Loading bileşenini göster
    return <Loading />;
  }
  
  return (
    <>
      <div className="bg-gray-100  flex items-center ml-20 mr-20 mt-6 overflow-hidden justify-end">
        <h1 className="text-6xl font-sans mb-4 mr-8 pr-20">Recommended Products</h1>
        <div className="pr-8 ">
          <img
            className=" object-cover h-80"
            src="/images/banner-girl-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="ml-20 mr-20 mt-20">
        <div className="grid grid-cols-5 gap-6">
          {todos?.map((todo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md relative"
            >
              <Link href={`/product/${todo?.id}`}>
                <img
                  className="bg-gray-100 w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={todo?.image}
                  alt=""
                />
              </Link>
              <div className="p-4 text-surface dark:text-dark">
                <h5 className="mb-2 text-lg font-medium leading-tight">
                  {todo?.title}
                </h5>
                <p className="mb-4 font-Caveat text-base text-gray-500 ">
                  {todo?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
