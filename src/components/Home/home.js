import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="p-1 bg-red-300 text-white font-medium text-center text-3xl">
        <div className="home_name_letter ml-7 text-slate-100">FVAGITO</div>
      </div>
      <div className="w-screen p-7 mb-5 bg-orange-100">
        <div className=" text-3xl font-light">Cream Stone</div>
        <div className="mt-1 font-extralight">Ice Cream, Deseerts, Shake</div>
      </div>
    </div>
  );
}

export default Home;
