import React from "react";
import Navibar from "../../components/navibar/Navibar";
import "../../app/globals.css";
import FeaturedContent from "../../components/featuredcontent/FeaturedContent";
import { store } from "@/stores/store";
import BottomBar from "@/components/bottombar/BottomBar";
import { Provider } from "react-redux";
export default function index() {
  return (
    <div>
      <Provider store={store} > 
        <Navibar />
        <FeaturedContent />
        <BottomBar />
      </Provider>
    </div>
  );
}
