import React from "react";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <div>
        <Banner />
      </div>

      {/* Discover Trending Game Today */}
      <div className="my-16 w-11/12 mx-auto">
        <h1 className="text-center font-bold text-4xl ">
          Discover Trending Game Today
        </h1>


      </div>
    </div>
  );
};

export default Home;
