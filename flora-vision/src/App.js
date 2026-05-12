import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import PlantCard from "./components/PlantCard";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-green-900 text-white min-h-screen">
      <Navbar />
      <HeroBanner />

      {/* Trendy Plants */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Trendy Plants</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <PlantCard
            image="/images/deskplant.jpg"
            name="For Your Desk Decorations"
            price="Rs. 399/-"
          />
          <PlantCard
            image="/images/deskplant2.jpg"
            name="For Your Desk Decorations"
            price="Rs. 399/-"
          />
        </div>
      </section>

      {}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Top Selling Plants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PlantCard image="/images/aglaonema.jpg" name="Aglaonema Plant" price="Rs. 300/-" />
          <PlantCard image="/images/plantain.jpg" name="Plantain Lilies" price="Rs. 380/-" />
          <PlantCard image="/images/cactus.jpg" name="Cactus" price="Rs. 259/-" />
          <PlantCard image="/images/swiss cheese.jpg" name="Swiss Cheese Plant" price="Rs. 400/-" />
          <PlantCard image="/images/sansevieria.jpg" name="Sansevieria Plant" price="Rs. 450/-" />
          <PlantCard image="/images/agave.jpg" name="Agave Plant" price="Rs. 350/-" />
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 px-6 bg-green-800">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard name="Shelby Russel" review="Just got my hands on some, and I couldn’t be happier." />
          <TestimonialCard name="Lula Rolfson" review="Each one has its unique charm and adds a lovely touch to my space." />
          <TestimonialCard name="Carol Huels" review="It’s like bringing a little piece of nature indoors." />
        </div>
      </section>

      {/* Best O2 Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Best O2</h2>
        <p className="max-w-3xl">
          We Have Small And Best O2 Plants Collections. Oxygen-producing plants, often referred to as ‘O2 plants,’ are those that release oxygen into the atmosphere through the process of photosynthesis. Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
