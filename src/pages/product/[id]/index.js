import BottomBar from "@/components/bottombar/BottomBar";
import Navibar from "@/components/navibar/Navibar";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import "../../../app/globals.css";
import Product from "@/components/product/Product";
import { useState } from "react";
export default function index() {
  const [basket, setBasket] = useState([]);

  return (
    <div>
      <Provider store={store}>
        <Navibar />
        <Product basket={basket} setBasket={setBasket} />
        <BottomBar />
      </Provider>
    </div>
  );
}
