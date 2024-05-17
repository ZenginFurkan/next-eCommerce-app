import { BiShoppingBag } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ShoppingCardForm from "../shoppingcardform/ShoppingCardForm";

export default function Navibar() {
  const router = useRouter();
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  
  const handleClickBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  }

 
  return (
    <div className="py-4">
      <div className="container mx-auto flex items-center justify-between mt-10 ">
        <div className="flex items-center">
          <img
            src="/images/salinaca.png"
            alt="Salinaka Icon"
            className="h-8 mr-4"
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-400" onClick={() => router.push("/home")} >
              Home
            </a>
            <button href="#" className="hover:text-gray-400" onClick={() => router.push("/shop")}>
              Shop
            </button>
            <a href="#" className="hover:text-gray-400" onClick={() => router.push("/featured")} >
              Featured
            </a>
            <a href="#" className="hover:text-gray-400" onClick={() => router.push("/recommended")} >
              Recommended
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-l-lg px-4 py-2 border text-white focus:outline-none"
          />
          <button className="bg-white hover:bg-gray-200 px-4 py-2 ">
            <span className="inline-block" onClick={handleClickBasket} >
              <BiShoppingBag className="h-8 w-8" />{" "}
            </span>{" "}
          </button>
          <button className="bg-black hover:bg-black-500 text-white px-4 py-2 " onClick={() => router.push("/signup")} >
            Sign Up
          </button>
          <button className="bg-gray-200 hover:bg-white-800 text-gray-600 px-4 py-2 " onClick={() => router.push("/signin")} >
            Sign In
          </button>
        </div>
      </div>
      {isBasketOpen && <ShoppingCardForm />}
    </div>
  );
}
