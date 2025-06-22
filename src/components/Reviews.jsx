import React from "react";

const reviews = [
  {
    quote: "I love how fresh everything feels. CleanBite fits my diet perfectly!",
    name: "Aarav M.",
  },
  {
    quote: "Finally, healthy food that tastes great AND arrives warm.",
    name: "Sneha P.",
  },
];

export default function Reviews() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">What Customers Say</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <blockquote
            key={index}
            className="italic text-gray-700 bg-yellow-100 p-4 rounded-xl shadow"
          >
            “{review.quote}” –
            <span className="font-semibold"> {review.name}</span>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
