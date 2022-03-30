import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import DeliveryLocation from "./Pages/DeliveryLocation/DeliveryLocation";
import BottomNavBar from "./Shared/BottomNavBar/BottomNavBar";
import TopNavBar from "./Shared/TopNavBar/TopNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route path="/delivery-location" element={<DeliveryLocation/>}></Route>
          
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
