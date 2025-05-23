import React from "react";

import bali from "../assets/bali.jpeg";
import paris from "../assets/paris.jpeg";
import kyoto from "../assets/kyoto.jpeg";
import capetown from "../assets/capetown.jpeg";
import nyc from "../assets/nyc.jpeg";
import rome from "../assets/rome.jpeg";

const destinations = [
  { name: "Bali, Indonesia", image: bali, rating: 4.8 },
  { name: "Paris, France", image: paris, rating: 4.7 },
  { name: "Kyoto, Japan", image: kyoto, rating: 4.9 },
  { name: "Cape Town, SA", image: capetown, rating: 4.6 },
  { name: "New York, USA", image: nyc, rating: 4.5 },
  { name: "Rome, Italy", image: rome, rating: 4.8 },
];

function Destinations() {
  return (
    <section className="destinations">
      <h2>Popular Destinations</h2>
      <div className="cards">
        {destinations.map((dest, index) => (
          <div key={index} className="card">
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>⭐{dest.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
