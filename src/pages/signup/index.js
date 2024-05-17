import React from "react";
import Navibar from "../../components/navibar/Navibar";
import "../../app/globals.css";
import BottomBar from "@/components/bottombar/BottomBar";
import { Provider } from "react-redux";
import SignupForm from "../../components/signupform/SignupForm"
import { store } from "@/stores/store";
export default function index() {
  return (
    <div>
      <Provider store={store}>
        <Navibar />
        <SignupForm />
        <BottomBar />
      </Provider>
    </div>
      
  )
}
