import React from "react";

function TestimonialCard({ name, review, image }) {
  return (
    <div className="bg-green-700 p-6 rounded-lg shadow-lg text-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <p className="italic mb-4">"{review}"</p>
      <h4 className="font-bold">{name}</h4>
      <div className="flex justify-center mt-2 text-yellow-400">
        ★★★★☆
      </div>
    </div>
  );
}

export default TestimonialCard;
