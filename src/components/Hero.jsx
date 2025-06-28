import React, { useEffect, useState } from "react";

import heroChicken from "../assets/hero-chicken.jpg";
import heroVegan from "../assets/hero-vegan.jpg";
import heroPizza from "../assets/hero-pizza.jpg";

const slides = [
  {
    title: "CRISPY CHICKEN",
    subtitle: "Fresh & Crispy",
    image: heroChicken,
  },
  {
    title: "VEGAN BURGER",
    subtitle: "Fresh & Healthy Delight",
    image: heroVegan,
  },
  {
    title: "PANEER PIZZA",
    subtitle: "Desi Cheese Crust Special",
    image: heroPizza,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const { title, subtitle, image } = slides[index];

  return (
    <section className="relative bg-orange-600 text-white overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-[600px] object-cover opacity-90 transition-all duration-700"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 bg-black bg-opacity-30">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-xl font-medium drop-shadow-md">{subtitle}</p>
        <button className="mt-9 bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold py-2 px-6 rounded-xl shadow-lg">
          Order Now
        </button>
      </div>
    </section>
  );
}
