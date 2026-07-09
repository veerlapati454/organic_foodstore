import React, { useEffect, useId, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import y1 from "../../assets/y1.webp"
import y2 from "../../assets/y2.webp"
import y3 from "../../assets/y3.webp"
import y4 from "../../assets/y4.webp"
import y5 from "../../assets/y5.webp"
import y6 from "../../assets/y6.webp"
import y7 from "../../assets/y7.webp"
import y8 from "../../assets/y8.webp"
import y9 from "../../assets/y9.webp"
import y11 from "../../assets/y11.webp"
import y12 from "../../assets/y12.webp"
import y13 from "../../assets/y13.webp"
import y14 from "../../assets/y14.webp"
import y15 from "../../assets/y15.webp"
import y10 from "../../assets/y10.webp"

import tomatoes from "../../assets/tomatoes.webp"
import wheat from "../../assets/wheat.webp"
import vegetables from "../../assets/vegetables.webp"
import mushrooms from "../../assets/mushrooms.webp"
import soil from "../../assets/soil.webp"
import harvest from "../../assets/harvest.webp"
import sunflower from "../../assets/sunflower.webp"
import farmer from "../../assets/farmer.webp"
import tractor from "../../assets/tractor.webp"
import greenhouse from "../../assets/greenhouse.webp"
import produce from "../../assets/produce.webp"

/* ============================================================
   Earthbound — HERO stays exactly as-is.
   Everything below the hero has been rebuilt around a new
   "Sunday Farmers Market" theme: stamped kraft tags, crate
   shelves, chalkboard signage, corkboards and postcards —
   instead of the hero's moody dusk-lit editorial look.
   ============================================================ */

const HERO_SLIDES = [
  { src: y1, tone: "bright" },
  { src: y2, tone: "dark" },
  { src: y3, tone: "bright" },
  { src: y4, tone: "dark" },
];

const HERO_SLIDE_MS = 5000;

// ===== ICONS =====
function ArrowUpRight({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function Play({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

function IconClock({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGlobe({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z" />
    </svg>
  );
}

function IconLeaf({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17 1.05.3 1.74.3C13 20 21 16 21 3c-5 0-10 1-13.5 4.5C5 9.5 4 12 4 14c0 .5 0 1 .12 1.5C9 8 17 8 17 8z" />
    </svg>
  );
}

function IconBasket({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.5 11 3 21h18l-2.5-10H5.5Zm1.7-2L9 4.5l1.7 1L9 9h7l-1.7-3.5 1.7-1 1.8 4.5H17v2H7V9h.2Zm4.3 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </svg>
  );
}

function IconSun({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1v3M12 20v3M3.5 3.5l2.1 2.1M18.4 18.4l2.1 2.1M1 12h3M20 12h3M3.5 20.5l2.1-2.1M18.4 5.6l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconSeedling({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22v-8a4 4 0 0 0-4-4H6a4 4 0 0 1 0-8h2a6 6 0 0 1 6 6v2" strokeLinecap="round" />
    </svg>
  );
}

function IconTractor({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
      <path d="M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
      <path d="M8 6h6l4 4v6H4v-4l4-6z" strokeLinecap="round" />
      <path d="M14 10l-2-4" strokeLinecap="round" />
    </svg>
  );
}

function IconFlower({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v1" strokeLinecap="round" />
      <path d="M12 13a3 3 0 1 1-3 3m3-3a3 3 0 1 0 3 3m-3-3v1" strokeLinecap="round" />
    </svg>
  );
}

function IconWater({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8 6 4 10 4 14a8 8 0 1 0 16 0c0-4-4-8-8-12z" strokeLinecap="round" />
    </svg>
  );
}

function IconHeart({ className = "" }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinecap="round" />
    </svg>
  );
}

function IconStar({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPlus({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

// ===== HERO SLIDESHOW BACKGROUND (unchanged) =====
function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="eb-hero-bg">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className={`eb-hero-slide eb-hero-slide--${HERO_SLIDES[index].tone}`}
          style={{ backgroundImage: `url(${HERO_SLIDES[index].src})` }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: HERO_SLIDE_MS / 1000, ease: "linear" } }}
        />
      </AnimatePresence>

      <div className="eb-hero-scrim-radial" />
      <div className="eb-hero-scrim-bottom" />
      <div className="eb-hero-grain" />

      <div className="eb-hero-dots" role="tablist" aria-label="Hero background slides">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show background ${i + 1}`}
            className={`eb-hero-dot ${i === index ? "eb-hero-dot--active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="eb-particles">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="eb-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${20 + Math.random() * 30}s`,
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            opacity: 0.1 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
}

function GrowingPlant() {
  return (
    <div className="eb-growing-plant">
      <div className="eb-plant-stem"></div>
      <div className="eb-plant-leaf eb-plant-leaf--1"></div>
      <div className="eb-plant-leaf eb-plant-leaf--2"></div>
      <div className="eb-plant-leaf eb-plant-leaf--3"></div>
      <div className="eb-plant-leaf eb-plant-leaf--4"></div>
      <div className="eb-plant-flower"></div>
    </div>
  );
}

function BlurText({ text, className, delayStart = 0 }) {
  const words = text.split(" ");
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <p ref={ref} className={`eb-blurtext-wrap ${className || ""}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="eb-blurtext-word"
          initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
          animate={
            visible
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [30, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.6,
            times: [0, 0.5, 1],
            ease: "easeOut",
            delay: delayStart + (i * 60) / 1000,
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function FadeUp({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ===== SCROLL REVEAL (shared by every section below the hero) =====
function ScrollReveal({ children, className, delay = 0, onClick, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ===== ORGANIC DIVIDER (hero only) =====
function OrganicDivider({ flip = false }) {
  return (
    <div className={`eb-divider ${flip ? "eb-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C150,55 300,5 450,28 C600,50 750,8 900,32 C1020,50 1110,15 1200,30 L1200,60 L0,60 Z" />
      </svg>
    </div>
  );
}

// ===== MARKET DIVIDER — crate-slat zigzag used everywhere below the hero =====
function MarketDivider({ tone = "cream", flip = false }) {
  return (
    <div className={`mk-divider mk-divider--${tone} ${flip ? "mk-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 L0,20 L50,4 L100,20 L150,4 L200,20 L250,4 L300,20 L350,4 L400,20 L450,4 L500,20 L550,4 L600,20 L650,4 L700,20 L750,4 L800,20 L850,4 L900,20 L950,4 L1000,20 L1050,4 L1100,20 L1150,4 L1200,20 L1200,40 Z" />
      </svg>
    </div>
  );
}

// ===== STAMP BADGE — the page's one signature motif: an ink-stamped
// "certified organic" circle, reused (and re-rotated) throughout =====
function StampBadge({ rotate = -8, className = "" }) {
  const id = useId();
  const topId = `stamp-top-${id}`;
  const botId = `stamp-bot-${id}`;
  return (
    <svg
      className={`mk-stamp ${className}`}
      viewBox="0 0 160 160"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 5" />
      <path id={topId} d="M 18 80 a 62 62 0 1 1 124 0" fill="none" />
      <path id={botId} d="M 30 92 a 50 50 0 1 0 100 0" fill="none" />
      <text fontSize="10.5" letterSpacing="3" fill="currentColor">
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          CERTIFIED ORGANIC
        </textPath>
      </text>
      <text fontSize="9" letterSpacing="2.5" fill="currentColor">
        <textPath href={`#${botId}`} startOffset="50%" textAnchor="middle">
          HAND PICKED · FARM FRESH
        </textPath>
      </text>
      <path
        d="M80 52c11 0 20 9 20 20 0 15-20 29-20 29s-20-14-20-29c0-11 9-20 20-20z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

// ===== HERO SECTION (untouched) =====
function Hero() {
  const navigate = useNavigate();

  return (
    <section className="eb-section eb-hero">
      <HeroSlideshow />
      <FloatingParticles />
      <GrowingPlant />

      <div className="eb-content eb-hero-content">
        <div className="eb-hero-body">
          <FadeUp delay={0.3}>
            <div className="eb-badge liquid-glass">
              <span className="eb-badge-chip">Fresh</span>
              <span className="eb-badge-text font-body">
                Organic produce delivered to your door
              </span>
            </div>
          </FadeUp>

          <BlurText
            text="Nature's Finest, Delivered Fresh"
            delayStart={0.4}
            className="eb-headline font-heading"
          />

          <FadeUp delay={0.7} className="eb-subheading font-body">
            From our family farm to your table — 100% organic, sustainably grown,
            and harvested at peak ripeness. Taste the difference real food makes.
          </FadeUp>

          <FadeUp delay={1.0} className="eb-cta-row">
            <motion.button
              className="eb-cta-primary liquid-glass-strong font-body"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/404')}
            >
              Shop Now
              <ArrowUpRight />
            </motion.button>
            <motion.button
              className="eb-cta-secondary font-body"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/404')}
            >
              <Play />
              Our Story
            </motion.button>
          </FadeUp>

          <FadeUp delay={1.2} className="eb-stats-row">
            {[
              { icon: <IconClock />, number: "24 Hrs", label: "Farm to Table" },
              { icon: <IconGlobe />, number: "500+", label: "Happy Customers" },
              { icon: <IconSeedling />, number: "100%", label: "Organic Certified" },
              { icon: <IconHeart />, number: "4.9★", label: "Customer Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="eb-stat-card liquid-glass"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => navigate('/404')}
              >
                {stat.icon}
                <div className="eb-stat-number font-heading">{stat.number}</div>
                <div className="eb-stat-label font-body">{stat.label}</div>
              </motion.div>
            ))}
          </FadeUp>
        </div>

        <FadeUp delay={1.3} className="eb-partners">
          <div className="eb-partners-chip liquid-glass font-body">
            Trusted by local restaurants and families
          </div>
          <div className="eb-partners-row">
            {["Green Table", "Harvest Kitchen", "Pure Platter", "Root & Vine", "Farm Fresh Co."].map(
              (name) => (
                <motion.span
                  key={name}
                  className="eb-partner-name font-heading"
                  whileHover={{ scale: 1.1, color: "var(--color-wheat)" }}
                  onClick={() => navigate('/404')}
                >
                  {name}
                </motion.span>
              )
            )}
          </div>
        </FadeUp>
      </div>

      <OrganicDivider />
    </section>
  );
}

/* ============================================================
   Everything from here down is the new "Sunday Market" theme.
   ============================================================ */

// ===== MARKET TICKER — the tonal handoff right after the hero =====
function MarketTicker() {
  const items = [
    "NO SYNTHETIC PESTICIDES",
    "PICKED WITHIN 24 HOURS",
    "500+ FAMILIES FED WEEKLY",
    "REGENERATIVE SOIL PRACTICES",
    "ZERO WASTE PACKAGING",
    "LOCAL FARM NETWORK",
  ];
  return (
    <div className="mk-ticker">
      <div className="mk-ticker-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mk-ticker-item font-mono">
            {t} <span className="mk-ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ===== MANIFESTO — kraft tags pinned to a pegboard, replaces Features =====
const MANIFESTO_ITEMS = [
  {
    icon: <IconLeaf />,
    title: "100% Organic",
    description: "No synthetic pesticides, no GMOs — every crate is certified before it leaves the field.",
    tone: "basil",
  },
  {
    icon: <IconWater />,
    title: "Sustainably Grown",
    description: "Water-conserving, regenerative practices that leave the soil better than we found it.",
    tone: "tomato",
  },
  {
    icon: <IconFlower />,
    title: "Biodiverse Farms",
    description: "Polyculture rows that keep pollinators busy and the whole ecosystem in balance.",
    tone: "butter",
  },
  {
    icon: <IconTractor />,
    title: "Local & Seasonal",
    description: "Nothing flown in from three continents away — just what's actually ripe, right now.",
    tone: "crate",
  },
];

function Manifesto() {
  return (
    <section className="mk-section mk-manifesto">
      <div className="eb-content mk-manifesto-content">
        <ScrollReveal className="mk-manifesto-header">
          <span className="mk-eyebrow font-mono">// THE PROMISE, STAMPED</span>
          <h2 className="mk-manifesto-heading font-heading">
            Real food,<br />real integrity.
          </h2>
          <StampBadge rotate={-9} className="mk-manifesto-stamp" />
        </ScrollReveal>

        <div className="mk-tag-row">
          {MANIFESTO_ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className={`mk-tag mk-tag--${item.tone}`}>
              <span className="mk-tag-hole" aria-hidden="true" />
              <div className="mk-tag-icon">{item.icon}</div>
              <h3 className="mk-tag-title font-heading">{item.title}</h3>
              <p className="mk-tag-body font-body">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <MarketDivider tone="basil" flip />
    </section>
  );
}

// ===== SHOP — the crate shelf, replaces Product Categories =====
const PRODUCTS = [
  { name: "Heirloom Tomatoes", price: "4.50", unit: "lb", image: tomatoes, tag: "Summer Pick", big: true },
  { name: "Rainbow Root Vegetables", price: "3.80", unit: "lb", image: vegetables, tag: "Year-Round" },
  { name: "Heritage Grain Wheat", price: "6.20", unit: "lb", image: wheat, tag: "Fall Harvest" },
  { name: "Foraged Wild Mushrooms", price: "9.90", unit: "lb", image: mushrooms, tag: "Autumn Only" },
  { name: "Living Soil Compost", price: "12.00", unit: "bag", image: soil, tag: "Grower's Choice" },
  { name: "Farmhouse Harvest Box", price: "28.00", unit: "box", image: harvest, tag: "Best Seller" },
  { name: "Sunflower Seed Blend", price: "5.40", unit: "lb", image: sunflower, tag: "Snacking" },
  { name: "Fresh Garden Produce Box", price: "32.00", unit: "box", image: produce, tag: "Family Size" },
];

function ShopSection() {
  const navigate = useNavigate();

  return (
    <section className="mk-section mk-shop">
      <div className="eb-content mk-shop-content">
        <ScrollReveal className="mk-shop-header">
          <span className="mk-eyebrow font-mono">// THE STALL</span>
          <h2 className="mk-shop-heading font-heading">Today's harvest</h2>
          <p className="mk-shop-sub font-body">
            Eight staples pulled straight from the crates this morning — the rest sells out by noon.
          </p>
        </ScrollReveal>

        <div className="mk-shop-grid">
          {PRODUCTS.map((p, i) => (
            <ScrollReveal
              key={p.name}
              delay={i * 0.05}
              className={`mk-product ${p.big ? "mk-product--big" : ""}`}
              onClick={() => navigate('/404')}
            >
              <div className="mk-product-image" style={{ backgroundImage: `url(${p.image})` }} />
              <span className="mk-product-season font-mono">{p.tag}</span>
              <div className="mk-price-tag font-mono">
                <span className="mk-price-amount">${p.price}</span>
                <span className="mk-price-unit">/{p.unit}</span>
              </div>
              <h3 className="mk-product-name font-heading">{p.name}</h3>
              <button
                type="button"
                className="mk-product-add font-body"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/404');
                }}
              >
                Add to basket <ArrowUpRight />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <MarketDivider tone="cream" />
    </section>
  );
}

// ===== HOW IT WORKS — staggered ticket-stub steps, replaces Capabilities =====
const STEPS = [
  {
    n: "01",
    Icon: IconSeedling,
    title: "Hand-Picked at Dawn",
    body: "Our growers walk the rows before sunrise, taking only what's truly ready that day.",
    image: y5,
  },
  {
    n: "02",
    Icon: IconBasket,
    title: "Boxed With Care",
    body: "Sorted, weighed, and packed in reusable crates — no plastic, no unnecessary filler.",
    image: y6,
  },
  {
    n: "03",
    Icon: IconSun,
    title: "On Your Table by Evening",
    body: "Routed straight to your neighborhood, usually within 24 hours of leaving the field.",
    image: y7,
  },
];

function HowItWorks() {
  return (
    <section className="mk-section mk-how">
      <div className="eb-content mk-how-content">
        <ScrollReveal className="mk-how-header">
          <span className="mk-eyebrow font-mono">// THE ROUTE</span>
          <h2 className="mk-how-heading font-heading">
            Field to fridge,<br />one day flat.
          </h2>
        </ScrollReveal>

        <div className="mk-how-track">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.12} className="mk-how-step" style={{ "--i": i }}>
              <div className="mk-how-thumb" style={{ backgroundImage: `url(${s.image})` }}>
                <span className="mk-how-number font-mono">{s.n}</span>
              </div>
              <div className="mk-how-icon liquid-glass">
                <s.Icon />
              </div>
              <h3 className="mk-how-title font-heading">{s.title}</h3>
              <p className="mk-how-body font-body">{s.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <MarketDivider tone="charcoal" flip />
    </section>
  );
}

// ===== GROW METHODS — full-bleed alternating rows, brand new section =====
const METHODS = [
  {
    title: "Open Field",
    body: "Row-cropped and rotated by season, our open fields rest and rebuild between harvests instead of being pushed for one more yield.",
    image: y8,
    tone: "basil",
  },
  {
    title: "Under Glass",
    body: "Our greenhouses stretch the growing season for the delicate stuff — herbs, seedlings, and anything that hates a frost.",
    image: y9,
    tone: "tomato",
  },
  {
    title: "By Hand & Tractor",
    body: "Heavy lifting goes to the tractor; ripeness judgment stays with the people who've walked these rows for years.",
    image: y10,
    tone: "butter",
  },
];

function GrowMethods() {
  return (
    <section className="mk-section mk-grow">
      <ScrollReveal className="eb-content mk-grow-header">
        <span className="mk-eyebrow font-mono">// HOW WE GROW</span>
        <h2 className="mk-grow-heading font-heading">
          Three ways to<br />grow it right.
        </h2>
      </ScrollReveal>

      {METHODS.map((m, i) => (
        <ScrollReveal
          key={m.title}
          delay={i * 0.1}
          className={`mk-grow-row ${i % 2 === 1 ? "mk-grow-row--reverse" : ""}`}
        >
          <div className="mk-grow-image" style={{ backgroundImage: `url(${m.image})` }} />
          <div className={`mk-grow-text mk-grow-text--${m.tone}`}>
            <h3 className="font-heading">{m.title}</h3>
            <p className="font-body">{m.body}</p>
          </div>
        </ScrollReveal>
      ))}

      <MarketDivider tone="butter" />
    </section>
  );
}

// ===== TESTIMONIALS — scattered postcards, replaces the grid =====
const TESTIMONIALS = [
  {
    quote: "The freshest produce I've ever had. You can taste the difference in every single bite.",
    name: "Chef Maria Rodriguez",
    role: "Owner, Farm-to-Table Restaurant",
    rating: 5,
  },
  {
    quote: "Our family looks forward to our weekly box. It's changed how we cook and eat entirely.",
    name: "The Johnson Family",
    role: "Weekly Subscribers Since 2020",
    rating: 5,
  },
  {
    quote: "Finally, a food source I can trust. Everything is transparent, sustainable, and delicious.",
    name: "Dr. Sarah Chen",
    role: "Nutritionist & Food Advocate",
    rating: 5,
  },
  {
    quote: "I stopped meal-planning around what's in the fridge and started planning around what's in the box.",
    name: "Tomás Alvarez",
    role: "Home Cook, 3 Years Subscribed",
    rating: 5,
  },
  {
    quote: "Our restaurant menu changed the day we switched suppliers — the tomatoes alone made the case.",
    name: "Priya Nair",
    role: "Head Chef, Root & Vine",
    rating: 5,
  },
];

function Testimonials() {
  const navigate = useNavigate();

  return (
    <section className="mk-section mk-testimonials">
      <div className="eb-content mk-testimonials-content">
        <ScrollReveal className="mk-testimonials-header">
          <span className="mk-eyebrow font-mono">// FROM THE MAILBAG</span>
          <h2 className="mk-testimonials-heading font-heading">
            Postcards from<br />our customers
          </h2>
        </ScrollReveal>

        <div className="mk-postcard-board">
          {TESTIMONIALS.map((item, index) => (
            <ScrollReveal
              key={item.name}
              delay={index * 0.1}
              className={`mk-postcard mk-postcard--${index % 5}`}
              onClick={() => navigate('/404')}
            >
              <div className="mk-postcard-stamp">
                {[...Array(item.rating)].map((_, i) => (
                  <IconStar key={i} className="mk-postcard-star" />
                ))}
              </div>
              <p className="mk-postcard-text font-body">"{item.quote}"</p>
              <div className="mk-postcard-author">
                <div className="mk-postcard-name font-heading">{item.name}</div>
                <div className="mk-postcard-role font-mono">{item.role}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <MarketDivider tone="paper" flip />
    </section>
  );
}

// ===== JOURNAL — corkboard of pinned recipe cards =====
const ARTICLES = [
  {
    title: "5 Easy Recipes with Seasonal Vegetables",
    excerpt: "Turn your weekly produce box into delicious, healthy meals the whole family will love.",
    image: y11,
    date: "June 2026",
    readTime: "4 min read",
  },
  {
    title: "Why Organic Matters: A Deep Dive",
    excerpt: "The real difference between organic and conventional farming, and why it matters for your health.",
    image: y15,
    date: "May 2026",
    readTime: "3 min read",
  },
  {
    title: "Building Community Through Food",
    excerpt: "How local food systems strengthen neighborhoods and create meaningful connections.",
    image: y12,
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    title: "A Beginner's Guide to Root Cellaring",
    excerpt: "Store your root vegetable haul for months without a single trip to the freezer aisle.",
    image: y14,
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    title: "Wild Mushrooms, Safely Foraged",
    excerpt: "What our foragers look for, and why we only ever sell what they'd eat themselves.",
    image: y13,
    date: "February 2026",
    readTime: "4 min read",
  },
];

function JournalSection() {
  const navigate = useNavigate();

  return (
    <section className="mk-section mk-journal">
      <div className="eb-content mk-journal-content">
        <ScrollReveal className="mk-journal-header">
          <span className="mk-eyebrow font-mono">// THE CORKBOARD</span>
          <h2 className="mk-journal-heading font-heading">
            Recipes &amp;<br />field notes
          </h2>
        </ScrollReveal>

        <div className="mk-corkboard">
          {ARTICLES.map((article, index) => (
            <ScrollReveal
              key={article.title}
              delay={index * 0.1}
              className={`mk-cork-card mk-cork-card--${index % 5}`}
              onClick={() => navigate('/404')}
            >
              <span className="mk-cork-pin" aria-hidden="true" />
              <div className="mk-cork-image" style={{ backgroundImage: `url(${article.image})` }} />
              <div className="mk-cork-body">
                <div className="mk-cork-meta font-mono">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mk-cork-title font-heading">{article.title}</h3>
                <p className="mk-cork-excerpt font-body">{article.excerpt}</p>
                <span className="mk-cork-readmore font-body">
                  Read more <ArrowUpRight />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <MarketDivider tone="basildeep" />
    </section>
  );
}

// ===== FAQ — new section, accordion on a deep basil field =====
const FAQS = [
  {
    q: "How fresh is \"fresh,\" really?",
    a: "Most crates leave the field the same morning they're picked and reach your door within 24 hours — nothing sits in cold storage for weeks waiting for an order.",
  },
  {
    q: "Can I pause or skip a delivery?",
    a: "Yes. Skip, pause, or reschedule any upcoming box from your account up to 48 hours before it ships — no fees, no phone calls.",
  },
  {
    q: "What does \"organic certified\" actually mean here?",
    a: "Every farm in our network is independently certified: no synthetic pesticides or fertilizers, no GMOs, and documented soil practices we can show you on request.",
  },
  {
    q: "Do you deliver outside the local area?",
    a: "Right now we deliver within a day's drive of our farms so produce never spends more than one night in transit. We're slowly expanding the radius each season.",
  },
  {
    q: "What if something arrives bruised or wilted?",
    a: "Tell us within 48 hours and we'll credit or replace it, no questions asked. Produce this fresh should never disappoint.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mk-section mk-faq">
      <div className="eb-content mk-faq-content">
        <ScrollReveal className="mk-faq-header">
          <span className="mk-eyebrow font-mono">// GOOD QUESTIONS</span>
          <h2 className="mk-faq-heading font-heading">
            Before you fill<br />a basket
          </h2>
        </ScrollReveal>

        <div className="mk-faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal
                key={f.q}
                delay={i * 0.06}
                className={`mk-faq-item ${isOpen ? "mk-faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="mk-faq-question font-heading"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <IconPlus className="mk-faq-icon" />
                </button>
                {isOpen && <p className="mk-faq-answer font-body">{f.a}</p>}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      <MarketDivider tone="charcoal" />
    </section>
  );
}

// ===== CTA — chalkboard sign, replaces the glassy CTA box =====
function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="mk-section mk-cta">
      <ScrollReveal className="eb-content mk-cta-content">
        <div className="mk-chalkboard">
          <StampBadge rotate={7} className="mk-cta-stamp" />
          <h2 className="mk-chalk-title font-heading">
            Join the Sunday<br />market list
          </h2>
          <p className="mk-chalk-sub font-body">
            One email a week: what's ripe, what's rare, and what's almost gone.
          </p>
          <motion.button
            type="button"
            className="mk-chalk-btn font-body"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/404')}
          >
            Get the Sunday List <ArrowUpRight />
          </motion.button>
          <div className="mk-chalk-benefits font-mono">
            <span>NO SPAM</span>
            <span>·</span>
            <span>UNSUBSCRIBE ANYTIME</span>
            <span>·</span>
            <span>500+ SUBSCRIBERS</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ===== MAIN EXPORT =====
export default function Home() {
  return (
    <div className="earthbound-root">
      <Hero />
      <MarketTicker />
      <Manifesto />
      <ShopSection />
      <HowItWorks />
      <GrowMethods />
      <Testimonials />
      <JournalSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}