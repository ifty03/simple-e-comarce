import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { name, price, img, quantity, seller, ratings } = props.product;
  console.log(props.product);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div title={name} className="font-bold text-xl mb-2">
          {name.length > 30 ? name.slice(0, 30) + "..." : name}
        </div>
        <p className="text-gray-700 text-base">
          <strong>Brand: {seller}</strong>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Ratings: {ratings}</p>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #sweet
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #salty
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #spicy
        </span>
      </div>
      <div>
        <button className="pl-4">
          <Link to="/" className="mb-3 relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Button Text</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
