"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navibar from "@/components/navibar/Navibar";
import BottomBar from "@/components/bottombar/BottomBar";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
          <body className={inter.className}>
            <Navibar  />
            {children}
            <BottomBar />
          </body>
      </Provider>
    </html>
  );
}
