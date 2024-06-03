import {
  FaList,
  FaShoppingCart,
  FaPlusSquare,
  FaClipboardList,
} from "react-icons/fa";

export const sideBar_data = [
  {
    name: "Buyer List",
    path: "/buy",
    // icon: <FaShoppingCart />,
    className: "navData",
  },
  {
    name: "Seller List",
    path: "/sell",
    // icon: <FaList />,
    className: "navData",
  },
  {
    name: "Add Product",
    path: "/add",
    // icon: <FaPlusSquare />,
    className: "navData",
  },
  {
    name: "List Product",
    path: "/list",
    // icon: <FaClipboardList />,
    className: "navData",
  },
];
