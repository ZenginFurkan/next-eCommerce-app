import React from 'react'
import ShopContent from '@/components/shopcontent/ShopContent'
import "../../app/globals.css";
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import Navibar from '@/components/navibar/Navibar';
import BottomBar from '@/components/bottombar/BottomBar';
export default function index() {
  return (
    <div>
      <Provider store={store}>
        <Navibar/>
      <ShopContent/>
      <BottomBar/>
      </Provider>
    </div>
  )
}
