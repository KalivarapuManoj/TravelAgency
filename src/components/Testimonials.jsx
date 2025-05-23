import React from 'react';

const reviews = [
  { name: 'John Cena', feedback: 'Absolutely amazing experience!', rating: 5 },
  { name: 'Steven Smith', feedback: 'Well-organized and very professional.', rating: 4 },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((r, i) => (
          <div key={i} className="review">
            <p>"{r.feedback}"</p>
            <h4>- {r.name}</h4>
            <div className="stars">{'⭐'.repeat(r.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
