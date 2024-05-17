import React from "react";
import Navibar from "../../components/navibar/Navibar";
import "../../app/globals.css";
import RecommendedContent from "@/components/recommendedcontent/RecommendedContent";
import BottomBar from "@/components/bottombar/BottomBar";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
export default function index() {
  return (
    <div>
      <Provider store={store}>
        <Navibar />
        <RecommendedContent />
        <BottomBar />
      </Provider>
    </div>
  );
}
