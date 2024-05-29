import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add_item from "./pages/Add_item/Add_item";
import List_item from "./pages/List_item/List_item";
import Order from "./pages/Order/Order";
import UserData from "./pages/UserData/UserData";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Sidebar />
      <Routes>
        <Route path="/add" element={<Add_item />} />
        <Route path="/list" element={<List_item />} />
        <Route path="/order" element={<Order />} />
        <Route path="/user" element={<UserData />} />
      </Routes>
    </div>
  );
};

export default App;
