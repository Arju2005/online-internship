import React from "react";

function PlantCard({ image, name, price, description }) {
  return (
    <div className="bg-green-700 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-green-300">{price}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export default PlantCard;
