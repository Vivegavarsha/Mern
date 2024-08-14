import React, { useState, useEffect } from 'react';
import './Customer.css';

const testimonials = [
  {
    text: "Was looking for a bedcover but stumbled upon your beautiful collection of jute tote bags. Liked it very much and would be ordering more soon. The finish of the product is very good, was packed nicely, and did not face any problem while placing the order.",
    author: "Sharvani Sharma",
    location: "Bengaluru",
    image: "https://media.architecturaldigest.in/wp-content/uploads/2021/07/SMR-Days-Maison-Bengal-jute-tote-design-1-1366x768.jpg"
  },
  {
    text: "Bought this as an anniversary gift and the team went out of their way to get this beautiful Jewelery delivered on time, in spite of being so many restrictions. Artisan alley's ease of service is flawless and they indeed give utmost priority to their customers.",
    author: "Kaveri",
    location: "New Delhi",
    image: "https://i.pinimg.com/originals/80/64/9f/80649f42a37c68d024925037205a83b1.jpg"
  },
  {
    text: "Purchased this beautiful rug for my farmhouse, I loved it, really happy with the product and its an excellent piece.",
    author: "Gururaj Moorching",
    location: "Bangalore",
    image: "https://assets.isu.pub/document-structure/230612110208-aa143507c0c7a37beada00e0a55b400f/v1/8f64ae7c0753ba7063381e6f4f5d81fa.jpeg"
  },
  {
    text: "It's a fantastic product, very nicely done.It was very nicely displayed on your website and the same has been delivered.I bought one for myself. It is very craftable and actually very nice",
    author: "Sriram Govindan",
    location: "Chennai",
    image: "https://5.imimg.com/data5/JO/SV/MY-35936360/cliq-sanganeri-scenery-print-cotton-king-size-bedsheet-500x500.png"
  }
];

const Customer = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [current]);

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null;
  }

  return (
    <div className="yu">
      <center><h1>A Word from Our Happy Customers</h1></center>
      <div className="cust">
        <button className="left-arrow" onClick={prevSlide}>‹</button>
        <button className="right-arrow" onClick={nextSlide}>›</button>
        {testimonials.map((testimonial, index) => (
          <div
            className={index === current ? 'vv active' : 'vv'}
            key={index}
          >
            {index === current && (
              <div className="testimonial-content">
                <img src={testimonial.image} alt={`Testimonial from ${testimonial.author}`} className="testimonial-image" />
                <div className="testimonial-text">{testimonial.text}</div>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-location">{testimonial.location}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
