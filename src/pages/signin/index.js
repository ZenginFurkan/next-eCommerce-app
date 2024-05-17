import React from "react";
import Navibar from "../../components/navibar/Navibar";
import "../../app/globals.css";
import BottomBar from "@/components/bottombar/BottomBar";
import { Provider } from "react-redux";
import SigninForm from "../../components/singinform/SigninForm"
import { store } from "@/stores/store";
export default function index() {
  return (
    <div>
      <Provider store={store}>
        <Navibar />
        <SigninForm />
        <BottomBar />
      </Provider>
    </div>
      
  )
}
