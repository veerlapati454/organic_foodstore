import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../Shared";
import "./SeasonalPicks.css";
import yc1 from "../../assets/yc1.webp"
import yc2 from "../../assets/yc2.webp"
import yc3 from "../../assets/yc3.webp"
import yc4 from "../../assets/yc4.webp"
import yc5 from "../../assets/yc5.webp"
import yc6 from "../../assets/yc6.webp"
import yc7 from "../../assets/yc7.webp"
import yc8 from "../../assets/yc8.webp"
import yc9 from "../../assets/yc9.webp"
import yc10 from "../../assets/yc10.webp"
import yc11 from "../../assets/yc11.webp"
import yc12 from "../../assets/yc12.webp"
import yd1 from "../../assets/yd1.webp"
import yd2 from "../../assets/yd2.webp"
import yd3 from "../../assets/yd3.webp"
import yd4 from "../../assets/yd4.webp"
import yd5 from "../../assets/yd5.webp"
import yd6 from "../../assets/yd6.webp"
import yd7 from "../../assets/yd7.webp"
import yd8 from "../../assets/yd8.webp"
import yd9 from "../../assets/yd9.webp"
import yd10 from "../../assets/yd10.webp"
import yd11 from "../../assets/yd11.webp"
import yd12 from "../../assets/yd12.webp"


const SEASONAL_DATA = {
  summer: {
    name: "Summer Harvest",
    label: "SUM",
    color: "#f9a825",
    bg: "linear-gradient(135deg, #f9a825 0%, #f57f17 100%)",
    storageTip: "Keep tomatoes at room temperature, never refrigerate — cold kills their flavor.",
    pairing: "Grilled corn, tomato salad, blueberry compote over sweet cream.",
    produce: [
      { name: "Sun-ripened Tomatoes", image: yc1, days: "Peak: June-Aug", note: "Best eaten within 3-4 days of picking" },
      { name: "Sweet Corn", image: yc2, days: "Peak: July-Sept", note: "Husk just before cooking for max sweetness" },
      { name: "Zucchini", image: yc3, days: "Peak: June-Sept", note: "Smaller squash have fewer seeds and more flavor" },
      { name: "Blueberries", image: yc4, days: "Peak: July-Aug", note: "Don't wash until ready to eat" },
      { name: "Peaches", image: yc5, days: "Peak: July-Aug", note: "Ripen at room temp in a paper bag" },
      { name: "Watermelon", image: yc6, days: "Peak: June-Aug", note: "A dull skin means it's ripe, not shiny" },
    ]
  },
  autumn: {
    name: "Autumn Harvest",
    label: "AUT",
    color: "#e65100",
    bg: "linear-gradient(135deg, #ff8f00 0%, #e65100 100%)",
    storageTip: "Store winter squash in a cool, dry place — they'll keep for months uncut.",
    pairing: "Roasted squash with cranberry glaze, apple crisp, cinnamon-spiced pumpkin soup.",
    produce: [
      { name: "Pumpkins", image:  yc7, days: "Peak: Sept-Oct", note: "Sugar pumpkins are best for cooking, not carving" },
      { name: "Apples", image:  yc8, days: "Peak: Sept-Nov", note: "Store in the fridge to keep crisp for weeks" },
      { name: "Butternut Squash", image:  yc9, days: "Peak: Oct-Nov", note: "Flavor deepens after a few weeks of storage" },
      { name: "Cranberries", image: yc10, days: "Peak: Oct-Nov", note: "Freeze extras — they keep well for a year" },
      { name: "Pears", image:  yc11, days: "Peak: Sept-Oct", note: "Ripen on the counter, then chill to slow it down" },
      { name: "Brussels Sprouts", image: yc12, days: "Peak: Sept-Nov", note: "Smaller sprouts are sweeter and less bitter" },
    ]
  },
  winter: {
    name: "Winter Harvest",
    label: "WIN",
    color: "#4fc3f7",
    bg: "linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)",
    storageTip: "Wrap leafy greens in a damp towel and store in the crisper for extra shelf life.",
    pairing: "Braised kale with garlic, citrus and fennel salad, root vegetable stew.",
    produce: [
      { name: "Kale", image: yd1, days: "Peak: Nov-Feb", note: "A frost actually sweetens the leaves" },
      { name: "Winter Squash", image:yd2 , days: "Peak: Nov-Jan", note: "Roast with the skin on for easy prep" },
      { name: "Citrus", image: yd3, days: "Peak: Dec-Feb", note: "Heavier fruit means juicier segments" },
      { name: "Leeks", image: yd4, days: "Peak: Dec-Feb", note: "Rinse well between layers to remove grit" },
      { name: "Fennel", image: yd5, days: "Peak: Nov-Jan", note: "The fronds work well as a fresh herb garnish" },
      { name: "Parsnips", image: yd6, days: "Peak: Nov-Feb", note: "Sweeter after the first cold snap of the season" },
    ]
  },
  spring: {
    name: "Spring Harvest",
    label: "SPR",
    color: "#66bb6a",
    bg: "linear-gradient(135deg, #66bb6a 0%, #2e7d32 100%)",
    storageTip: "Trim asparagus ends and stand upright in water like cut flowers.",
    pairing: "Shaved asparagus salad, strawberry shortcake, spring pea risotto.",
    produce: [
      { name: "Asparagus", image: yd7, days: "Peak: April-May", note: "Thinner stalks are usually more tender" },
      { name: "Strawberries", image: yd8, days: "Peak: May-June", note: "Fully red berries won't ripen further off the vine" },
      { name: "Peas", image: yd9, days: "Peak: May-June", note: "Eat soon after picking — sugars fade fast" },
      { name: "Radishes", image: yd10, days: "Peak: April-June", note: "Save the greens for a peppery pesto" },
      { name: "Artichokes", image: yd11, days: "Peak: March-May", note: "A tight, squeaky leaf grip means fresh" },
      { name: "Spring Onions", image: yd12, days: "Peak: April-June", note: "Milder than mature onions, great raw" },
    ]
  }
};

function SeasonalPicks() {
  const [season, setSeason] = useState("summer");
  const [timeProgress, setTimeProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeProgress(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const currentData = SEASONAL_DATA[season];

  return (
    <div className="sp-page">
      {/* Season Selector */}
      <div className="sp-season-selector">
        {Object.entries(SEASONAL_DATA).map(([key, data]) => (
          <motion.button
            key={key}
            className={`sp-season-btn ${season === key ? "active" : ""}`}
            style={{ background: season === key ? data.bg : "transparent" }}
            onClick={() => setSeason(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sp-season-label">{data.label}</span>
            <span className="sp-season-name">{data.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Season Hero */}
      <section className="sp-hero" style={{ background: currentData.bg }}>
        <motion.div
          className="sp-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="sp-hero-title">{currentData.name}</h1>
          <p className="sp-hero-subtitle">
            Harvested at peak ripeness — available for {Math.floor(100 - timeProgress)}% of the season
          </p>
          <div className="sp-progress-bar">
            <motion.div
              className="sp-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${100 - timeProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Produce Grid */}
      <section className="sp-grid-section">
        <div className="sp-grid">
          {currentData.produce.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.1}>
              <motion.div
                className="sp-produce-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="sp-produce-image">
                  <img src={item.image} alt={item.name} />
                  <div className="sp-produce-overlay">
                    <span className="sp-produce-days">{item.days}</span>
                  </div>
                </div>
                <div className="sp-produce-info">
                  <h3 className="sp-produce-name">{item.name}</h3>
                  <p className="sp-produce-note">{item.note}</p>
                  <div className="sp-produce-tag">Fresh Pick</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Storage & Pairing Section */}
      <section className="sp-info-section">
        <div className="sp-info-grid">
          <ScrollReveal>
            <div className="sp-info-card">
              <span className="sp-info-label">Storage Tip</span>
              <p className="sp-info-text">{currentData.storageTip}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="sp-info-card">
              <span className="sp-info-label">Pairs Well With</span>
              <p className="sp-info-text">{currentData.pairing}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default SeasonalPicks;