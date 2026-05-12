import React from "react";

function HeroBanner() {
  return (
    <section className="text-center py-20 bg-green-800">
      <h2 className="text-5xl font-bold mb-4">Earth’s Exhale</h2>
      <p className="mb-6 max-w-xl mx-auto">
        Earth’s Exhale symbolizes the purity and vitality of the Earth’s breath!
      </p>
      <div className="space-x-4">
        <button className="bg-green-600 px-6 py-2 rounded hover:bg-green-500">Buy Now</button>
        <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-green-500">Explore</button>
      </div>
    </section>
  );
}

export default HeroBanner;
