import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Everyday Shopping
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adip, adipiscing elit fugit inventore et netus et sapien cumque quam. Lorem ipsum dolor sit amet, consectetur adip omnis justo inventore et netus et sapien cumque qu inhusir voluptua. Lorem ipsum dolor sit amet, conmigo.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;