import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h1 className="text-center text-white text-2xl font-semibold mt-8">
        this is cart items
      </h1>
      <div className="pl-10 mt-8">
        <h4 className="text-xl font-mono font-semibold text-white mt-3">
          Selected Items:
        </h4>
        <h4 className="text-xl font-mono font-semibold text-white mt-3">
          Total Price:
        </h4>
        <h4 className="text-xl font-mono font-semibold text-white mt-3">
          Total Shipping
        </h4>
        <h4 className="text-xl font-mono font-semibold text-white mt-3">
          Tax:
        </h4>
        <h3 className="text-2xl font-mono font-semibold text-white mt-3">
          Grand Total:
        </h3>
      </div>
      <button>
        <a
          href="#_"
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-red-500 rounded-md hover:bg-red-400 sm:w-auto sm:mb-0"
          data-primary="green-400"
          data-rounded="rounded-2xl"
          data-primary-reset="{}"
        >
          Clear Cart
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </button>
      <button>
        <a
          href="#_"
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
          data-primary="green-400"
          data-rounded="rounded-2xl"
          data-primary-reset="{}"
        >
          {props.children}
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </button>
    </div>
  );
};

export default Cart;
