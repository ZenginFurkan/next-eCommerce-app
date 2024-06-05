"use client";
import React, { useEffect } from "react";
import { fetchTodos } from "@/stores/glasses-store/todoSlice";
import { TiArrowRightOutline } from "react-icons/ti";
import FeaturedCard from "./FeaturedCard";
import RecommendedCard from "./RecommendedCard";
import "../../app/globals.css";
import Loading from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
export default function HomeContent() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.todos);
  const firstSixTodos = todos?.slice(0, 6);

  if (todos.length === 0) {
    return <Loading />;
  }

  if (!Array.isArray(firstSixTodos)) {
    // Veri yüklenene kadar veya hata alana kadar Loading bileşenini göster
    return <Loading />;
  }

  return (
    <>
      <div className="bg-gray-100 flex items-center ml-20 mr-20 mt-6">
        <div className="mr-8 pl-8">
          <h1 className="text-2xl font-bold mb-4">Furkan Zengin</h1>
          <p className="text-gray-700">
            Buying eyewear should leave you happy and good-looking, with money
            in your pocket. Glasses, sunglasses, and contacts—we’ve got your
            eyes covered.
          </p>
          <button className="mt-12 ml-5 bg-black hover:bg-black-600 text-white px-4 py-2 flex items-center space-x-2">
            <span onClick={() => router.push("/shop")} >Shop Now</span>
            <TiArrowRightOutline />
          </button>
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="/images/banner-girl.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between ml-20 mt-20 font-bold">
        Featured Products
        <button className="underline mr-20" onClick={() => router.push("/featured")} >See All</button>
      </div>
      <FeaturedCard firstSixTodos={firstSixTodos} />
      <div className="flex justify-between ml-20 mt-20 font-bold">
        Recommended Products
        <button className="underline mr-20" onClick={() => router.push("/recommended")} >See All</button>
      </div>
      <RecommendedCard firstSixTodos={firstSixTodos} />
    </>
  );
}
