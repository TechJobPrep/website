import React from "react";
import "./Testimonials.css";

import comment1 from '../Assets/comment1.jpg'
import comment2 from '../Assets/comment2.jpg'
import comment3 from '../Assets/comment3.jpg'
import comment4 from '../Assets/comment4.jpg'
import comment5 from '../Assets/comment5.jpg'
import comment6 from '../Assets/comment1.jpeg'

// Replace with your Instagram comment images
const testimonials = [
  { id: 1, img: comment6 },
  { id: 2, img: comment5 },
  { id: 3, img: comment3 },
  { id: 4, img: comment4 },
  { id: 5, img: comment2 },
  { id: 6, img: comment1 },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Students Say</h2>
      <p className="testimonial-subheading">
        See what our students shared on Instagram!
      </p>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-item" key={testimonial.id}>
            <img
              src={testimonial.img}
              alt={`Testimonial ${testimonial.id}`}
              className="testimonial-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
