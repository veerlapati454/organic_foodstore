import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  HiOutlineArrowLeft,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import "./NotFound.css";
import logo from "../../assets/stackly_logo.webp";

// ── Custom Icons ──
function LeafIcon({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17 1.05.3 1.74.3C13 20 21 16 21 3c-5 0-10 1-13.5 4.5C5 9.5 4 12 4 14c0 .5 0 1 .12 1.5C9 8 17 8 17 8z" />
    </svg>
  );
}

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ── Go Back (always exactly one step back) ──
  const goBack = () => {
    navigate(-1);
  };

  // ── Go Home ──
  const goHome = () => {
    navigate("/");
  };

  // ── Organic Food Suggestions ──
  const suggestions = [
    { name: "Organic Alphonso Mangoes", emoji: "🥭", path: "/products/mangoes" },
    { name: "Fresh Organic Spinach", emoji: "🌿", path: "/products/spinach" },
    { name: "Desi Ghee (500ml)", emoji: "🧈", path: "/products/ghee" },
    { name: "Basmati Rice (5kg)", emoji: "🍚", path: "/products/rice" },
    { name: "Cold-Pressed Coconut Oil", emoji: "🥥", path: "/products/coconut-oil" },
    { name: "Organic Turmeric Powder", emoji: "🌾", path: "/products/turmeric" },
  ];

  const isAdmin = location.pathname.includes('/admin');

  return (
    <div className="not-found-page">
      {/* ── Animated Background ── */}
      <div className="not-found-bg">
        <div className="bg-leaf leaf-1">🌿</div>
        <div className="bg-leaf leaf-2">🍃</div>
        <div className="bg-leaf leaf-3">🌱</div>
        <div className="bg-leaf leaf-4">🌾</div>
        <div className="bg-leaf leaf-5">🍀</div>
        <div className="bg-leaf leaf-6">🌻</div>
        <div className="bg-leaf leaf-7">🍎</div>
        <div className="bg-leaf leaf-8">🥑</div>
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className={`not-found-container ${isVisible ? "visible" : ""}`}>
        {/* ── Logo ── */}
        <div className="not-found-logo">
          <img src={logo} alt="Organic Market" />
        </div>

        {/* ── Main Content ── */}
        <div className="not-found-content">
          <div className="not-found-icon">
            <LeafIcon />
            <span className="not-found-number">404</span>
          </div>

          <h1>Oops! This Page Has Gone Organic</h1>
          <p className="not-found-description">
            Looks like this page has wandered off to the farm! 
            The produce you're looking for might have been harvested 
            or is growing in another garden.
          </p>

          {/* ── Search Box ── */}
          <div className="not-found-search">
            <HiMagnifyingGlass className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for organic products..." 
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  navigate(`/search?q=${encodeURIComponent(e.target.value.trim())}`);
                }
              }}
            />
            <button className="search-btn">Search</button>
          </div>

          {/* ── Action Buttons ── */}
          <div className="not-found-actions">
            <button className="action-btn back-btn" onClick={goBack}>
              <HiOutlineArrowLeft />
              Go Back
            </button>
            <button className="action-btn home-btn" onClick={goHome}>
              <HiOutlineHome />
              Home
            </button>
          </div>

          {/* ── Shop Quick Links ── */}
          <div className="not-found-quick-shop">
            <h3>
              <HiOutlineShoppingBag />
              Still hungry? Try these organic picks:
            </h3>
            <div className="quick-shop-grid">
              {suggestions.map((item, index) => (
                <Link 
                  to={item.path} 
                  className="quick-shop-item"
                  key={index}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="shop-emoji">{item.emoji}</span>
                  <span className="shop-name">{item.name}</span>
                  <span className="shop-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Fun Fact ── */}
          <div className="not-found-fact">
            <HiOutlineSparkles className="fact-icon" />
            <p>
              <strong>Did you know?</strong> Organic farming uses 30% less energy 
              than conventional farming. Every page you visit helps support 
              sustainable agriculture! 🌱
            </p>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="not-found-footer">
          <p>© 2026 Organic Market. All rights reserved. 🌿</p>
          <div className="footer-links">
            <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"}>Dashboard</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}