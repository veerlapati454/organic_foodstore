import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "../Shared";
import "./OurFarm.css";
import ye1 from "../../assets/ye1.webp"
import ye2 from "../../assets/ye2.webp"
import ye3 from "../../assets/ye3.webp"
import ye4 from "../../assets/ye4.webp"
import ye5 from "../../assets/ye5.webp"

const FARMERS = [
  {
    name: "Elena Rodriguez",
    role: "Head Grower",
    bio: "30+ years of organic farming experience, specializing in heirloom varieties passed down through her own family's fields before she brought them to Earthbound.",
    image: ye1,
    specialty: "Tomatoes & Peppers"
  },
  {
    name: "James Chen",
    role: "Soil Scientist",
    bio: "Regenerative agriculture expert focusing on soil health and biodiversity, running weekly tests to keep every field's microbiome in balance.",
    image: ye2,
    specialty: "Soil Science"
  },
  {
    name: "Maria Santos",
    role: "Farm Manager",
    bio: "Coordinates daily operations and ensures sustainable farming practices are followed from planting through harvest and delivery.",
    image: ye3,
    specialty: "Operations"
  },
  {
    name: "Owen Bailey",
    role: "Orchard Keeper",
    bio: "Tends the fruit rows and hedgerows, and manages the pollinator habitats that keep every block of the farm producing season after season.",
    image: ye4,
    specialty: "Orchards & Pollinators"
  }
];

const FARM_STATS = [
  { number: "120", label: "Acres of Organic Land" },
  { number: "45", label: "Varieties Grown" },
  { number: "100%", label: "Renewable Energy" },
  { number: "500+", label: "Families Fed Weekly" }
];

const TIMELINE = [
  {
    year: "1962",
    title: "The First Field",
    text: "Elena's grandparents cleared twelve acres and planted the farm's first rows of tomatoes and squash by hand."
  },
  {
    year: "1991",
    title: "Going Organic",
    text: "The second generation dropped every synthetic input on the property and spent three years rebuilding the soil from scratch."
  },
  {
    year: "2014",
    title: "Regenerative Practices",
    text: "James joined the team and introduced cover cropping, reduced tillage, and rotational grazing across all 120 acres."
  },
  {
    year: "Today",
    title: "Farm to Table",
    text: "Produce leaves the field and reaches your table within 48 hours, grown by the same family that started it all."
  }
];

const PRACTICES = [
  {
    title: "No Synthetic Inputs",
    text: "Every field has been free of synthetic pesticides and fertilizers for over three decades, certified organic since 1994."
  },
  {
    title: "Water Stewardship",
    text: "Drip irrigation and rainwater catchment cut our water use by nearly half compared to conventional row farming."
  },
  {
    title: "Living Soil",
    text: "Cover crops, compost, and minimal tillage keep the soil web intact, so nutrients cycle naturally instead of being trucked in."
  },
  {
    title: "Pollinator Corridors",
    text: "Hedgerows and wildflower borders run along every field edge, giving bees and beneficial insects a place to live year-round."
  }
];

function OurFarm() {
  const navigate = useNavigate();

  return (
    <div className="of-page">
      {/* Hero */}
      <section className="of-hero">
        <div className="of-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our Family Farm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Three generations of growers dedicated to sustainable, organic agriculture
          </motion.p>
          <motion.button
            className="of-hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => navigate("/market-stall")}
          >
            Shop This Week's Harvest
          </motion.button>
        </div>
        <div className="of-hero-image">
          <img src= {ye5} alt="" />
        </div>
      </section>

      {/* Stats */}
      <section className="of-stats">
        {FARM_STATS.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.1}>
            <div className="of-stat-item">
              <h2 className="of-stat-number">{stat.number}</h2>
              <p className="of-stat-label">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Our Story */}
      <section className="of-story">
        <ScrollReveal>
          <h2 className="of-section-title">Our Story</h2>
          <p className="of-section-intro">
            What started as twelve cleared acres has grown into a farm that feeds
            hundreds of families every week, without ever losing sight of how it began.
          </p>
        </ScrollReveal>
        <div className="of-timeline">
          {TIMELINE.map((item, index) => (
            <ScrollReveal key={item.year} delay={index * 0.1}>
              <div className="of-timeline-item">
                <div className="of-timeline-year">{item.year}</div>
                <div className="of-timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Farmers */}
      <section className="of-farmers">
        <h2 className="of-section-title">Meet the Growers</h2>
        <div className="of-farmers-grid">
          {FARMERS.map((farmer, index) => (
            <ScrollReveal key={farmer.name} delay={index * 0.1}>
              <motion.div
                className="of-farmer-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="of-farmer-image">
                  <img src={farmer.image} alt={farmer.name} />
                </div>
                <div className="of-farmer-info">
                  <h3 className="of-farmer-name">{farmer.name}</h3>
                  <p className="of-farmer-role">{farmer.role}</p>
                  <p className="of-farmer-bio">{farmer.bio}</p>
                  <span className="of-farmer-specialty">{farmer.specialty}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Practices */}
      <section className="of-practices">
        <h2 className="of-section-title">How We Farm</h2>
        <div className="of-practices-grid">
          {PRACTICES.map((practice, index) => (
            <ScrollReveal key={practice.title} delay={index * 0.1}>
              <div className="of-practice-card">
                <h3>{practice.title}</h3>
                <p>{practice.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="of-cta">
        <ScrollReveal>
          <h2>Taste What We Grow</h2>
          <p>
            Every crate we pack reflects the same care that has shaped this land for
            three generations. See what's fresh this week.
          </p>
          <div className="of-cta-buttons">
            <button className="of-cta-primary" onClick={() => navigate("/market-stall")}>
              Visit the Market Stall
            </button>
            <button className="of-cta-secondary" onClick={() => navigate("/sustainability")}>
              Read About Sustainability
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

export default OurFarm;