import React from 'react';
import { FaHeadset, FaThumbsUp, FaStar, FaMapMarkedAlt } from 'react-icons/fa';

function WhyChooseUs() {
  return (
    <section className="why-us">
      <h2>Why Choose Us</h2>
      <div className="features">
        <div className="feature">
          <FaHeadset />
          <p>24/7 Customer Support</p>
        </div>
        <div className="feature">
          <FaThumbsUp />
          <p>Best Price Guarantee</p>
        </div>
        <div className="feature">
          <FaStar />
          <p>Top Rated Experiences</p>
        </div>
        <div className="feature">
          <FaMapMarkedAlt />
          <p>Handpicked Tours</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
