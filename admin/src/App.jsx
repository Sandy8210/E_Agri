import React from "react";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import BuyerList from "./pages/BuyerList/BuyerList";
import SellerList from "./pages/SellerList/SellerList";
import ListProduct from "./pages/ListProduct/ListProduct";
import AddProduct from './pages/AddProduct/AddProduct'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/buy" element={<BuyerList />} />
        <Route path="/list" element={<ListProduct />} />
        <Route path="/sell" element={<SellerList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default App;
