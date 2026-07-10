import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/stackly_logo.webp"

/* ============================================================
   Stackly — Site Footer (Organic Food Store)
   Matches the liquid-glass design system from the site.
   All interactive buttons currently route to /404 (placeholder pages).
   ============================================================ */

const LOGO_SRC = logo;

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

// Social Media Icons
function InstagramIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home" },
  { label: "Market Stall" },
  { label: "Seasonal Picks" },
  { label: "Our Farm" },
  { label: "Sustainability" },
  { label: "Recipes" },
];

const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: TwitterIcon, label: "Twitter" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YouTubeIcon, label: "YouTube" },
];

export default function Footer({ logoSrc = LOGO_SRC, logoAlt = "Stackly" }) {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const goTo404 = () => {
    navigate("/404");
  };

  return (
    <footer className="ef-footer">
      <div className="ef-top liquid-glass">
        <div className="ef-brand">
          {/* Logo */}
          <div
            className="ef-logo liquid-glass"
            onClick={()=>navigate("/")}
            style={{ cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goTo404()}
          >
            {logoSrc ? (
              <img src={logoSrc} alt={logoAlt} className="ef-logo-img" />
            ) : (
              <span className="ef-logo-placeholder font-heading">s</span>
            )}
          </div>
          <p className="ef-brand-text font-body">
            Real food, honestly grown. Fresh produce, seasonal harvests, and
            pantry staples sourced straight from small organic farms.
          </p>
          <button className="ef-cta font-body" onClick={goTo404}>
            Shop the Market
            <ArrowUpRight />
          </button>
        </div>

        {/* Quick Links & Social */}
        <div className="ef-columns">
          <div className="ef-column">
            <div className="ef-column-heading font-body">Quick Links</div>
            <ul className="ef-column-list">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button className="ef-column-link font-body" onClick={goTo404}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="ef-column">
            <div className="ef-column-heading font-body">Visit</div>
            <button
              className="ef-address-link font-body"
              onClick={goTo404}
            >
              Nagole
              <br />
              Hyderabad, India
            </button>
            <button
              className="ef-address-link font-body"
              onClick={goTo404}
            >
              hello@stackly.com
              <br />
              (+91) 7891528801
            </button>

            {/* Social Media Icons */}
            <div className="ef-social">
              <div className="ef-column-heading font-body">Follow Us</div>
              <div className="ef-social-icons">
                {SOCIAL_LINKS.map((social) => (
                  <button
                    key={social.label}
                    className="ef-social-icon"
                    onClick={goTo404}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ef-bottom">
        <span className="ef-copyright font-body">
          © {year} Stackly Organic Store. All rights reserved.
        </span>
        <div className="ef-legal">
          <button className="ef-legal-link font-body" onClick={goTo404}>
            Privacy
          </button>
          <button className="ef-legal-link font-body" onClick={goTo404}>
            Terms
          </button>
        </div>
      </div>
    </footer>
  );
}