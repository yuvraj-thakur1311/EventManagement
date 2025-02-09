import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/heroSec.jpg" alt="event" />
      <div className="item">
        <h3>Event Maestro</h3>
        <div>
          <h1>Crafting Unforgettable Experiences</h1>
          <p>
            Step into a world where every detail is meticulously curated to create an event beyond your wildest dreams. Experience a night of enchantment, innovation, and pure delight as we transform your vision into a celebration you'll remember forever.
          </p>
          <div className="book">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              BOOK NOW
            </Link>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
