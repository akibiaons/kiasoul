import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import productsData from "./api/Api";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import axios from "axios";

// Will create a layout below to define what I want. So Header and footer will show on every page when I click on cart or checkout for example.
const Layout =()=>{
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />,
        loader: productsData,
      },
      {
        path:"/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;