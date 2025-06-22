import React from "react";
import crispyBurger from "../assets/crispy-chicken.jpg";

export default function Hero() {
  return (
    <section
      className="relative bg-orange-600 text-white"
      style={{ backgroundColor: "#F0541E" }}
    >
      {/* Background Image */}
      <img
        src={crispyBurger}
        alt="Crispy Chicken"
        className="w-full h-[400px] object-cover opacity-90"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          CRISPY <br /> CHICKEN
        </h1>
        <p className="mt-4 text-xl font-medium drop-shadow-md">
          Open Daily:{" "}
          <span className="text-yellow-300 font-bold">11:30PM - 8:30PM</span>
        </p>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold py-2 px-6 rounded-xl shadow-lg">
          Order Now
        </button>
      </div>
    </section>
  );
}
