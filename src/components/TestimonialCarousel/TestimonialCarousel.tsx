import React from "react";
import styles from "./TestimonialCarousel.module.css";
import testimonials from "../../data/testimonials.json";

const TestimonialCarousel: React.FC = () => {
  return (
    <div className={styles.carousel}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className={styles.testimonial}>
          <p className={styles.text}>"{testimonial.text}"</p>
          <p className={styles.author}>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
