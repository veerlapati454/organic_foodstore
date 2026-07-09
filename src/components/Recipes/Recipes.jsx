import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../Shared";
import "./Recipes.css";
import ye10 from "../../assets/ye10.webp"
import ye11 from "../../assets/ye11.webp"
import ye12 from "../../assets/ye12.webp"
import ye13 from "../../assets/ye13.webp"
import ye14 from "../../assets/ye14.webp"
import ye15 from "../../assets/ye15.webp"

const RECIPES = [
  {
    id: 1,
    title: "Heirloom Tomato Bruschetta",
    description: "Simple, fresh, and bursting with flavor — the perfect summer appetizer",
    image: ye10,
    prepTime: "15 mins",
    difficulty: "Easy",
    tags: ["Vegetarian", "Gluten-Free"],
    ingredients: ["Heirloom tomatoes", "Fresh basil", "Garlic", "Olive oil", "Balsamic vinegar"]
  },
  {
    id: 2,
    title: "Root Vegetable Soup",
    description: "A warming, hearty soup that celebrates the best of autumn harvest",
    image: ye12,
    prepTime: "45 mins",
    difficulty: "Medium",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: ["Carrots", "Sweet potatoes", "Parsnips", "Onions", "Vegetable broth"]
  },
  {
    id: 3,
    title: "Berry & Herb Summer Salad",
    description: "A refreshing combination of seasonal berries and garden herbs",
    image: ye11,
    prepTime: "20 mins",
    difficulty: "Easy",
    tags: ["Vegan", "Raw"],
    ingredients: ["Mixed berries", "Fresh mint", "Arugula", "Goat cheese", "Balsamic glaze"]
  },
  {
    id: 4,
    title: "Roasted Squash & Sage Risotto",
    description: "Creamy arborio rice slow-cooked with roasted squash and crisped sage leaves",
    image: ye1,
    prepTime: "50 mins",
    difficulty: "Medium",
    tags: ["Vegetarian", "Gluten-Free"],
    ingredients: ["Butternut squash", "Arborio rice", "Fresh sage", "Vegetable stock", "Parmesan"]
  },
  {
    id: 5,
    title: "Charred Corn & Black Bean Tacos",
    description: "Smoky grilled corn and black beans piled onto warm tortillas with lime crema",
    image: ye15,
    prepTime: "30 mins",
    difficulty: "Easy",
    tags: ["Vegetarian"],
    ingredients: ["Sweet corn", "Black beans", "Corn tortillas", "Lime", "Fresh cilantro"]
  },
  {
    id: 6,
    title: "Garden Herb Pesto Pasta",
    description: "A bright, herbaceous pesto made from garden basil, parsley, and toasted pine nuts",
    image: ye13,
    prepTime: "25 mins",
    difficulty: "Easy",
    tags: ["Vegetarian"],
    ingredients: ["Fresh basil", "Parsley", "Pine nuts", "Parmesan", "Pasta"]
  }
];

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="rec-page">
      {/* Hero */}
      <section className="rec-hero">
        <div className="rec-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Farm-to-Table Recipes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Simple, delicious ways to enjoy our seasonal produce
          </motion.p>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="rec-grid-section">
        <div className="rec-grid">
          {RECIPES.map((recipe, index) => (
            <ScrollReveal key={recipe.id} delay={index * 0.1}>
              <motion.div
                className="rec-recipe-card"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="rec-recipe-image">
                  <img src={recipe.image} alt={recipe.title} loading="lazy" />
                  <div className="rec-recipe-meta">
                    <span>{recipe.prepTime}</span>
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
                <div className="rec-recipe-content">
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <div className="rec-recipe-tags">
                    {recipe.tags.map(tag => (
                      <span key={tag} className="rec-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="rec-modal" onClick={() => setSelectedRecipe(null)}>
          <motion.div
            className="rec-modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="rec-modal-close"
              onClick={() => setSelectedRecipe(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="rec-modal-image">
              <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            </div>
            <div className="rec-modal-body">
              <h2>{selectedRecipe.title}</h2>
              <p>{selectedRecipe.description}</p>
              <div className="rec-modal-details">
                <span>{selectedRecipe.prepTime}</span>
                <span>{selectedRecipe.difficulty}</span>
              </div>
              <h4>Ingredients</h4>
              <ul className="rec-modal-ingredients">
                {selectedRecipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Recipes;