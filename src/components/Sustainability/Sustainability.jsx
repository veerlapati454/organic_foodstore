import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../Shared";
import "./Sustainability.css";
import ye6 from "../../assets/ye6.webp"
import ye7 from "../../assets/ye7.webp"
import ye8 from "../../assets/ye8.webp"
import ye9 from "../../assets/ye9.webp"

const PRACTICES = [
  {
    title: "Regenerative Soil",
    description: "We rebuild soil health through cover cropping, composting, and no-till farming",
    stats: "95% less erosion",
    image: ye6
  },
  {
    title: "Water Conservation",
    description: "Drip irrigation and rainwater harvesting reduce water usage by 60%",
    stats: "60% less water",
    image: ye7
  },
  {
    title: "Biodiversity",
    description: "Pollinator habitats and diverse crop rotations support local ecosystems",
    stats: "120+ species",
    image: ye8
  },
  {
    title: "Zero Waste",
    description: "Compostable packaging and closed-loop systems eliminate landfill waste",
    stats: "98% diversion",
    image: ye9
  }
];

const CERTIFICATIONS = [
  "USDA Organic Certified",
  "Regenerative Agriculture",
  "B Corp Pending",
  "1% for the Planet",
  "Zero Waste Certified",
  "Carbon Neutral"
];

function Sustainability() {
  return (
    <div className="sus-page">
      {/* Hero */}
      <section className="sus-hero">
        <div className="sus-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Growing a Better Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every choice we make is guided by our commitment to the planet
          </motion.p>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="sus-practices">
        {PRACTICES.map((practice, index) => (
          <ScrollReveal key={practice.title} delay={index * 0.1}>
            <motion.div
              className="sus-practice-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="sus-practice-image">
                <img src={practice.image} alt={practice.title} />
                <span className="sus-practice-stat">{practice.stats}</span>
              </div>
              <div className="sus-practice-content">
                <span className="sus-practice-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </section>

      {/* Certifications */}
      <section className="sus-certifications">
        <h2>Our Certifications</h2>
        <div className="sus-cert-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <ScrollReveal key={cert} delay={index * 0.05}>
              <motion.div
                className="sus-cert-item"
                whileHover={{ y: -3 }}
              >
                <span>{cert}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sustainability;