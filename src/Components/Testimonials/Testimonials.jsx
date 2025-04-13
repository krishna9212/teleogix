import "./Testimonials.css";
import user_1 from "../../assets/Calling-rafiki.svg";
import user_2 from "../../assets/Calling-pana.svg";
import user_3 from "../../assets/Calling-bro.svg";
import user_4 from "../../assets/Phone customization-bro.svg";
import user_5 from "../../assets/Video call-bro.svg";
import test_1 from "../../assets/user-1.png";
import test_2 from "../../assets/user-2.png";
import test_3 from "../../assets/user-3.png";
import test_4 from "../../assets/user-4.png";

import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const images = [user_1, user_2, user_3, user_4, user_5];

const testimonials = [
  {
    img: test_1,
    name: "Vaidahi Kapoor",
    text: "Teleogix boosted our marketing results with precise targeting and real-time analytics. A must-have for growth!",
  },
  {
    img: test_2,
    name: "Abhishek Rao",
    text: "Their voice solutions streamlined our customer support with crystal-clear communication and smart tracking.",
  },
  {
    img: test_3,
    name: "Mike Johnson",
    text: "Teleogix helped us scale outreach with automation and strong analytics. Highly recommended!",
  },
  {
    img: test_4,
    name: "Emily Davis",
    text: "We’ve seen stronger customer engagement thanks to Teleogix’s personalized messaging and efficient tools.",
  },
];


export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  const testimonialHandlers = useSwipeable({
    onSwipedLeft: handleNextTestimonial,
    onSwipedRight: handlePrevTestimonial,
  });

  return (
    <div className="testimonial-page">
      {/* Image Slider */}
      <div className="image-slider-container">
        <div className="image-slider">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={i === index ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-container" {...testimonialHandlers}>
        <div className="testimonial-card">
          <h1 style={{ color: "white" }}>What Other Says</h1>
          <div className="testChng">
            <img src={testimonials[currentTestimonial].img} alt="" />
            <p>"{testimonials[currentTestimonial].text}"</p>
            <h3>- {testimonials[currentTestimonial].name}</h3>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="dots-navigation">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentTestimonial === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
