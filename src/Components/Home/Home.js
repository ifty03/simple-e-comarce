import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const setNavigate = () => {
    navigate("/products");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
      <div className="col-span-2 ml-20 mt-9">
        <p className="text-orange-600 font-semibold">Sale up to 70% off</p>
        <h1 className="text-6xl font-bold mt-16">New Collection For Fall</h1>
        <p className="text-xl mb-16">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <button
          onClick={setNavigate}
          class="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded"
        >
          Shop Now
        </button>
      </div>
      <div className="">
        <img
          style={{
            width: "300px",
            border: "6px solid gray",
            borderRadius: "10px",
          }}
          src="model.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
