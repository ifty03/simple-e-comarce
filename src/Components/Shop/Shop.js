import React from "react";
import useProducts from "../hooks/useProduct";
import Cart from "./Cart/Cart";

import Products from "./Products/Products";

const Shop = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 ml-6 mt-12">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Products key={product.id} product={product}></Products>
          ))}
        </div>
      </div>
      <div className="ml-10 bg-slate-900">
        <Cart>
          <p>Review Order</p>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
