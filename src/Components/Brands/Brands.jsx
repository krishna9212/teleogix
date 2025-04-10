import React, { useState, useEffect, useRef } from "react";
import "./Brands.css";
import image1 from "../../assets/images-1.png";
import image2 from "../../assets/images-2.png";
import image3 from "../../assets/images-3.png";
import image4 from "../../assets/images-4.png";
import image5 from "../../assets/images-5.png";
import image6 from "../../assets/images-6.png";
import image7 from "../../assets/images-7.png";
import image8 from "../../assets/images-8.png";
import image9 from "../../assets/images-9.png";
import image10 from "../../assets/images-10.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
];

const Brands = () => {
  const [clients, setClients] = useState(0);
  const [growth, setGrowth] = useState(0);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateNumber(setClients, 267, 1500);
          animateNumber(setGrowth, 27, 1500);
          setHasAnimated(true);
        }
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumber = (setValue, target, duration) => {
    let start = 0;
    const increment = target / (duration / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 20);
  };

  return (
    <div className="brands" ref={sectionRef}>
      <h1>
        <span className="splFont">Trusted by Leading Global Brands</span>
      </h1>
      <div className="brand-slider">
        <div className="brand-slide">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Brand ${index}`} />
          ))}
          {images.map((src, index) => (
            <img key={index + images.length} src={src} alt={`Brand ${index}`} />
          ))}
        </div>
      </div>
      <div className="achiev">
        <h3>Our Achievements</h3>
        <p>
          Enhancing customer <span className="splFont">engagement</span> with
          top-tier <span className="splFont">solutions</span>
        </p>
        <div className="numbers">
          <div className="clients">
            <h1>{clients}+</h1>
            <p>Total Clients</p>
          </div>
          <div className="growth">
            <h1>{growth}%</h1>
            <p>Monthly Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
