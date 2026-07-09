import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, StampBadge } from "../Shared";
import "./Shop.css";

const PRODUCT_CATEGORIES = ["All", "Vegetables", "Fruits", "Pantry", "Bundles"];

const SHOP_PRODUCTS = [
  {
    id: 1,
    name: "Heirloom Tomato Bundle",
    price: "$24.99",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600",
    badge: "Best Seller",
    organic: true
  },
  {
    id: 2,
    name: "Summer Berry Box",
    price: "$18.99",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=600",
    badge: "Limited",
    organic: true
  },
  {
    id: 3,
    name: "Farmhouse Pantry Bundle",
    price: "$39.99",
    category: "Bundles",
    image: "https://images.unsplash.com/photo-1588255725575-e0b3b1a3b1b8?w=600",
    badge: "Value",
    organic: true
  },
  {
    id: 4,
    name: "Garden Fresh Vegetables",
    price: "$14.99",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600",
    badge: "Fresh",
    organic: true
  },
  {
    id: 5,
    name: "Raw Honey Jar",
    price: "$12.00",
    category: "Pantry",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600",
    badge: "Artisan",
    organic: true
  },
  {
    id: 6,
    name: "Weekly Family Box",
    price: "$49.99",
    category: "Bundles",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    badge: "Popular",
    organic: true
  }
];

function Shop() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = category === "All" 
    ? SHOP_PRODUCTS 
    : SHOP_PRODUCTS.filter(p => p.category === category);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Animation feedback
    const btn = document.getElementById(`add-${product.id}`);
    if (btn) {
      btn.textContent = "✓ Added!";
      setTimeout(() => { btn.textContent = "Add to Basket"; }, 1500);
    }
  };

  return (
    <div className="shop-page">
      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StampBadge rotate={-5} className="shop-hero-stamp" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Visit the Stall
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Fresh from the farm, delivered to your door
          </motion.p>
        </div>
      </section>

      {/* Cart Button */}
      <button 
        className="shop-cart-btn"
        onClick={() => setShowCart(!showCart)}
      >
        🛒 {cart.length} items
      </button>

      {/* Cart Drawer */}
      {showCart && (
        <motion.div 
          className="shop-cart-drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
        >
          <h3>Your Basket</h3>
          {cart.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="shop-cart-item">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <motion.button 
                className="shop-checkout-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Checkout
              </motion.button>
            </>
          )}
        </motion.div>
      )}

      {/* Category Filters */}
      <div className="shop-categories">
        {PRODUCT_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`shop-cat-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <section className="shop-grid-section">
        <div className="shop-grid">
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.08}>
              <motion.div 
                className="shop-product-card"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="shop-product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="shop-product-badge">{product.badge}</span>
                  {product.organic && (
                    <span className="shop-organic-badge">🌱 Organic</span>
                  )}
                </div>
                <div className="shop-product-info">
                  <h3>{product.name}</h3>
                  <div className="shop-product-meta">
                    <span className="shop-product-price">{product.price}</span>
                    <span className="shop-product-category">{product.category}</span>
                  </div>
                  <motion.button
                    id={`add-${product.id}`}
                    className="shop-add-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Basket
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shop;