import BottomBar from "@/components/bottombar/BottomBar";
import Navibar from "@/components/navibar/Navibar";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import "../../../app/globals.css";
import Product from "@/components/product/Product";
export default function index() {


    return (
        <div>
            <Provider store={store}>
            <Navibar/>
            <Product/>
            <BottomBar/>
            </Provider>
        </div>
    )
}
