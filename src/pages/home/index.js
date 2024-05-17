import BottomBar from "@/components/bottombar/BottomBar";
import HomeContent from "@/components/homecontent/HomeContent";
import Navibar from "@/components/navibar/Navibar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Navibar />
        <HomeContent />
        <BottomBar />
      </Provider>
    </div>
  );
}
