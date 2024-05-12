"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navibar from "@/components/navibar/Navibar";
import BottomBar from "@/components/bottombar/BottomBar";
import { store } from "@/stores/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <Navibar />
        {children}
        <BottomBar />
        </Provider>
      </body>
    </html>
  );
}
