import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

// Will create a layout below to define what I want. So Header and footer will show on every page when I click on cart or checkout for example.
const layout =()=>{
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className='font-bodyFont'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
export default App;