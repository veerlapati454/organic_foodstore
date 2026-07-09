import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StampBadge } from "../Shared";
// NOTE: OrganicDivider import removed on purpose — see explanation in chat.
// If you fix the `position: fixed` bug inside Shared.jsx's OrganicDivider,
// you can restore: import { ScrollReveal, OrganicDivider, StampBadge } from "../Shared";
import "./MarketStall.css";
import ya1 from "../../assets/ya1.webp"
import ya2 from "../../assets/ya2.webp"
import ya3 from "../../assets/ya3.webp"
import ya4 from "../../assets/ya4.webp"
import ya5 from "../../assets/ya5.webp"
import ya6 from "../../assets/ya6.webp"
import ya8 from "../../assets/ya8.webp"
import yb1 from "../../assets/yb1.webp"
import yb2 from "../../assets/yb2.webp"
import yb3 from "../../assets/yb3.webp"
import yb4 from "../../assets/yb4.webp"
import yb5 from "../../assets/yb5.webp"
import yb6 from "../../assets/yb6.webp"
import yb7 from "../../assets/yb7.webp"
import yb8 from "../../assets/yb8.webp"
import yc1 from "../../assets/yc1.webp"
import yc2 from "../../assets/yc2.webp"
import yc3 from "../../assets/yc3.webp"
import yc4 from "../../assets/yc4.webp"
import yc5 from "../../assets/yc5.webp"
import yc6 from "../../assets/yc6.webp"


// Online images for produce
const PRODUCE_IMAGES = {
  tomatoes: ya1,
  carrots: ya2,
  lettuce: ya3,
  mushrooms: ya4,
  peppers: ya5,
  potatoes: ya6,
  berries: yb1,
  herbs: yb2,
  peaches: yb3,
  apples: yb4,
  eggs: yb5,
  honey: yb6,
  jam: yb7,
  oliveoil: yb8,
  farmer: ya8,
};

const STALL_SECTIONS = [
  {
    id: "veg",
    title: "Fresh Vegetables",
    items: [
      { name: "Heirloom Tomatoes", price: "$4.50/lb", image: PRODUCE_IMAGES.tomatoes, organic: true },
      { name: "Rainbow Carrots", price: "$3.80/lb", image: PRODUCE_IMAGES.carrots, organic: true },
      { name: "Butter Lettuce", price: "$2.99/head", image: PRODUCE_IMAGES.lettuce, organic: true },
      { name: "Wild Mushrooms", price: "$9.90/lb", image: PRODUCE_IMAGES.mushrooms, organic: true },
      { name: "Sweet Bell Peppers", price: "$3.20/lb", image: PRODUCE_IMAGES.peppers, organic: true },
      { name: "Fingerling Potatoes", price: "$2.75/lb", image: PRODUCE_IMAGES.potatoes, organic: true },
    ]
  },
  {
    id: "fruit",
    title: "Seasonal Fruits",
    items: [
      { name: "Organic Berries", price: "$5.99/pint", image: PRODUCE_IMAGES.berries, organic: true },
      { name: "Fresh Herbs", price: "$2.50/bunch", image: PRODUCE_IMAGES.herbs, organic: true },
      { name: "Georgia Peaches", price: "$4.10/lb", image: PRODUCE_IMAGES.peaches, organic: true },
      { name: "Honeycrisp Apples", price: "$3.60/lb", image: PRODUCE_IMAGES.apples, organic: true },
    ]
  },
  {
    id: "pantry",
    title: "Pantry Goods",
    items: [
      { name: "Pasture-Raised Eggs", price: "$6.99/dozen", image: PRODUCE_IMAGES.eggs, organic: true },
      { name: "Raw Honey", price: "$12.00/jar", image: PRODUCE_IMAGES.honey, organic: true },
      { name: "Small-Batch Jam", price: "$8.50/jar", image: PRODUCE_IMAGES.jam, organic: true },
      { name: "Cold-Pressed Olive Oil", price: "$16.00/bottle", image: PRODUCE_IMAGES.oliveoil, organic: true },
    ]
  }
];

const FEATURES = [
  { icon: "", title: "Certified Organic", copy: "Every crate is grown without synthetic pesticides or fertilizers." },
  { icon: "", title: "Locally Grown", copy: "Sourced from farms within 50 miles of our stall, harvested at peak ripeness." },
  { icon: "", title: "Picked Fresh Daily", copy: "Nothing sits in storage — what's picked today is what's on the table today." },
];

const TESTIMONIALS = [
  { quote: "Best tomatoes I've had outside my grandmother's garden.", name: "Priya K." },
  { quote: "The honey alone is worth the trip every single week.", name: "Marcus T." },
  { quote: "Finally a market stall that actually tells you where the food comes from.", name: "Elena R." },
];

function MarketStall() {
  const [selectedCategory, setSelectedCategory] = useState("veg");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="ms-page">
      {/* Hero Banner */}
      <section className="ms-hero">
        <div className="ms-hero-content">
          <motion.span
            className="ms-hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <StampBadge rotate={-5} />
          </motion.span>
          <motion.h1
            className="ms-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The Market Stall
          </motion.h1>
          <motion.p
            className="ms-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Fresh from our fields to your table — every crate tells a story
          </motion.p>
        </div>
        <div className="ms-hero-pattern" />
        <svg className="ms-hero-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Category Navigation */}
      <div className="ms-categories">
        {STALL_SECTIONS.map((section) => (
          <button
            key={section.id}
            className={`ms-category-btn ${selectedCategory === section.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <section className="ms-grid-section">
        <div className="ms-grid">
          <AnimatePresence mode="wait">
            {STALL_SECTIONS.find(s => s.id === selectedCategory)?.items.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.1}>
                <motion.div
                  className="ms-product-card"
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="ms-product-image">
                    <img src={item.image} alt={item.name} />
                    {item.organic && (
                      <span className="ms-organic-badge">🌱 Organic</span>
                    )}
                  </div>
                  <div className="ms-product-info">
                    <h3 className="ms-product-name">{item.name}</h3>
                    <p className="ms-product-price">{item.price}</p>
                    <motion.button
                      className="ms-add-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Basket
                    </motion.button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="ms-features">
        {FEATURES.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.1}>
            <div className="ms-feature-card">
              <span className="ms-feature-icon">{f.icon}</span>
              <h4>{f.title}</h4>
              <p>{f.copy}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Meet the Farmer */}
      <section className="ms-farmer">
        <ScrollReveal>
          <div className="ms-farmer-image">
            <img src={PRODUCE_IMAGES.farmer} alt="Local farmer" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="ms-farmer-copy">
            <span className="ms-eyebrow">Meet the Farmer</span>
            <h2>Grown with care, not shortcuts</h2>
            <p>
              For three generations, our family has worked the same soil,
              rotating crops and composting by hand to keep the land healthy.
              Every item on this stall was harvested within the last 48 hours.
            </p>
            <button className="ms-outline-btn">Read Our Story</button>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="ms-testimonials">
        <h2 className="ms-section-title">Customer Love</h2>
        <div className="ms-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="ms-testimonial-card">
                <p className="ms-testimonial-quote">“{t.quote}”</p>
                <p className="ms-testimonial-name">— {t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="ms-newsletter">
        <div className="ms-newsletter-inner">
          <h2>Get the weekly harvest list</h2>
          <p>What's fresh, what's in season, and what's almost gone — every Friday.</p>
          {subscribed ? (
            <p className="ms-newsletter-success">Thanks! Check your inbox to confirm 🌾</p>
          ) : (
            <form className="ms-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* Self-contained bottom wave (replaces OrganicDivider) */}
      <svg className="ms-bottom-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}

export default MarketStall;