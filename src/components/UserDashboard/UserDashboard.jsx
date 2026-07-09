import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineShoppingBag,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCog6Tooth,
  HiOutlineQuestionMarkCircle,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowTrendingDown,
  HiOutlineDocumentPlus,
  HiOutlineUserPlus,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineInbox,
  HiOutlineStar,
  HiOutlineGlobeAlt,
  HiOutlineArrowDownTray,
  HiOutlineTruck,
  HiOutlineEllipsisHorizontal,
  HiOutlineClipboardDocumentList,
  HiOutlineSun,
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineCloudArrowUp,
  HiOutlineBanknotes,
  HiOutlineScale,
  HiOutlineFunnel,
  HiOutlineCircleStack,
  HiOutlineArrowPath,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineTag,
  HiOutlinePaperAirplane,
  HiOutlineChevronRight,
  HiOutlinePlusCircle,
  HiOutlineCreditCard,
  HiOutlineUserCircle,
  HiOutlineLockClosed,
  HiOutlineLanguage,
  HiOutlineBookOpen,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineVideoCamera,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";
import "./UserDashboard.css";
import logo from "../../assets/stackly_logo.webp";

// ── Custom Icons ──
function LeafIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17 1.05.3 1.74.3C13 20 21 16 21 3c-5 0-10 1-13.5 4.5C5 9.5 4 12 4 14c0 .5 0 1 .12 1.5C9 8 17 8 17 8z" />
    </svg>
  );
}

function HeartIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// ── Navigation ──
const NAV_ITEMS = [
  { label: "Dashboard", icon: HiOutlineSquares2X2, view: "dashboard" },
  { label: "Shop Organic", icon: HiOutlineShoppingBag, view: "shop" },
  { label: "My Orders", icon: HiOutlineClipboardDocumentList, view: "orders" },
  { label: "Favorites", icon: HeartIcon, view: "favorites" },
  { label: "Subscriptions", icon: HiOutlineArrowPath, view: "subscriptions" },
  { label: "Analytics", icon: HiOutlineChartBar, view: "analytics" },
  { label: "Messages", icon: HiOutlineChatBubbleLeftRight, view: "messages" },
  { label: "Settings", icon: HiOutlineCog6Tooth, view: "settings" },
  { label: "Help & Support", icon: HiOutlineQuestionMarkCircle, view: "help" },
];

// ── Stats ──
const STATS = [
  { label: "Total Orders", value: "147", up: true, icon: HiOutlineShoppingBag, delta: "+12%" },
  { label: "Active Subscriptions", value: "3", up: true, icon: HiOutlineArrowPath, delta: "+1" },
  { label: "Favorites", value: "24", up: true, icon: HeartIcon, delta: "+5" },
  { label: "Monthly Spend", value: "₹24,800", up: true, icon: HiOutlineBanknotes, delta: "+18%" },
  { label: "Avg. Order Value", value: "₹1,680", up: true, icon: HiOutlineScale, delta: "+5%" },
  { label: "Seasonal Picks", value: "12", up: false, icon: HiOutlineSparkles, delta: "-2" },
];

// ── Products ──
const FEATURED_PRODUCTS = [
  { id: 1, name: "Organic Alphonso Mangoes", price: "₹310/kg", image: "🥭", rating: 4.9, badge: "In Season", organic: true },
  { id: 2, name: "Basmati Rice (5kg)", price: "₹120/kg", image: "🍚", rating: 4.8, badge: "Best Seller", organic: true },
  { id: 3, name: "Desi Ghee (500ml)", price: "₹950/jar", image: "🧈", rating: 4.9, badge: "Premium", organic: true },
  { id: 4, name: "Cold-Pressed Coconut Oil", price: "₹260/L", image: "🥥", rating: 4.7, badge: "Pure", organic: true },
  { id: 5, name: "Fresh Organic Spinach", price: "₹28/bunch", image: "🌿", rating: 4.6, badge: "Fresh", organic: true },
  { id: 6, name: "Turmeric Powder (250g)", price: "₹84/pack", image: "🌾", rating: 4.8, badge: "Organic", organic: true },
];

const WEEKLY_OFFERS = [
  { name: "Alphonso Mangoes", discount: "25% OFF", image: "🥭", price: "₹232/kg" },
  { name: "Organic Millets Mix", discount: "20% OFF", image: "🌾", price: "₹47/kg" },
  { name: "Desi Ghee (500ml)", discount: "15% OFF", image: "🧈", price: "₹807/jar" },
  { name: "Fresh Spinach Bunch", discount: "Buy 1 Get 1", image: "🌿", price: "₹28/bunch" },
];

// ── Orders ──
const RECENT_ORDERS = [
  { id: "#HV-5031", product: "Organic Heirloom Tomatoes", status: "Delivered", amount: "₹1,200", qty: "5 kg", date: "Jun 28", delivery: "Jun 29" },
  { id: "#HV-5030", product: "Basmati Rice (5kg)", status: "Shipped", amount: "₹2,400", qty: "2 bags", date: "Jun 28", delivery: "Jul 1" },
  { id: "#HV-5029", product: "Fresh Organic Spinach", status: "Processing", amount: "₹340", qty: "3 bunches", date: "Jun 27", delivery: "Jun 30" },
  { id: "#HV-5028", product: "Alphonso Mangoes Box", status: "Delivered", amount: "₹3,100", qty: "1 box", date: "Jun 27", delivery: "Jun 28" },
  { id: "#HV-5027", product: "Organic Millets Mix", status: "Cancelled", amount: "₹890", qty: "5 kg", date: "Jun 26", delivery: "-" },
  { id: "#HV-5026", product: "Cold-Pressed Coconut Oil", status: "Delivered", amount: "₹1,560", qty: "2 bottles", date: "Jun 26", delivery: "Jun 27" },
];

// ── Subscriptions ──
const SUBSCRIPTIONS = [
  { name: "Weekly Organic Veg Box", items: "Spinach, Tomatoes, Onions, Carrots", price: "₹1,299/week", next: "Jul 1, 2026", status: "Active" },
  { name: "Monthly Fruit Basket", items: "Mangoes, Bananas, Apples, Grapes", price: "₹2,499/month", next: "Jul 15, 2026", status: "Active" },
  { name: "Pantry Essentials", items: "Rice, Ghee, Oil, Spices", price: "₹3,999/month", next: "Jul 8, 2026", status: "Paused" },
];

// ── Activity Feed ──
const ACTIVITY_FEED = [
  { icon: HiOutlineDocumentPlus, text: "New organic produce: Heirloom Tomatoes added to your favorites", time: "8 minutes ago", tone: "green" },
  { icon: HiOutlineCheckCircle, text: "Order #HV-5031 delivered successfully", time: "2 hours ago", tone: "success" },
  { icon: HiOutlineTruck, text: "Your order #HV-5030 has been shipped", time: "4 hours ago", tone: "info" },
  { icon: HiOutlineInbox, text: "Weekly Organic Box subscription renewed", time: "6 hours ago", tone: "green" },
  { icon: HiOutlineSparkles, text: "New seasonal offer: 25% off Alphonso Mangoes", time: "Yesterday", tone: "info" },
  { icon: HiOutlineTag, text: "Use code ORGANIC10 for 10% off your next order", time: "Yesterday", tone: "green" },
];

// ── Favorites ──
const FAVORITES = [
  { name: "Organic Alphonso Mangoes", price: "₹310/kg", image: "🥭", inStock: true },
  { name: "Desi Ghee (500ml)", price: "₹950/jar", image: "🧈", inStock: true },
  { name: "Cold-Pressed Coconut Oil", price: "₹260/L", image: "🥥", inStock: true },
  { name: "Organic Basmati Rice", price: "₹120/kg", image: "🍚", inStock: false },
];

// ── Reviews ──
const REVIEWS = [
  { product: "Alphonso Mangoes", reviewer: "Verified Buyer", rating: 5, text: "Absolutely divine — perfectly ripened, zero chemicals, delivered fresh to our door." },
  { product: "Organic Basmati Rice", reviewer: "Bulk Buyer", rating: 4, text: "Excellent grain quality and authentic aroma, though delivery took a day longer." },
  { product: "Desi Ghee (500ml)", reviewer: "Verified Buyer", rating: 5, text: "Pure and grainy — just like grandma used to make. Will reorder every month." },
];

// ── Shop Categories ──
const SHOP_CATEGORIES = [
  { name: "Fresh Vegetables", icon: "🥬", count: 48 },
  { name: "Organic Fruits", icon: "🍎", count: 36 },
  { name: "Grains & Cereals", icon: "🌾", count: 24 },
  { name: "Dairy & Ghee", icon: "🧈", count: 18 },
  { name: "Spices & Herbs", icon: "🌿", count: 30 },
  { name: "Oils & Extracts", icon: "🥥", count: 15 },
  { name: "Beverages", icon: "☕", count: 12 },
  { name: "Snacks & Sweets", icon: "🍪", count: 20 },
];

// ── Messages ──
const MESSAGES_PREVIEW = [
  { name: "Farm Fresh Store", snippet: "Your weekly organic box is ready for delivery.", time: "10m", unread: true },
  { name: "Delivery Partner", snippet: "Your order #HV-5030 will be delivered by 7 AM.", time: "1h", unread: true },
  { name: "Organic Farmer", snippet: "Mango harvest is 2 days ahead of schedule.", time: "3h", unread: false },
  { name: "Support Team", snippet: "Your subscription has been renewed successfully.", time: "Yesterday", unread: false },
];

// ── Delivery Schedule ──
const DELIVERY_SCHEDULE = [
  { day: "Today", status: "Delivered", items: "Spinach, Tomatoes, Onions" },
  { day: "Tomorrow", status: "Scheduled", items: "Mangoes, Bananas, Apples" },
  { day: "Wed, Jul 1", status: "Processing", items: "Weekly Veg Box" },
  { day: "Fri, Jul 3", status: "Planned", items: "Pantry Essentials" },
];

// ── Certifications ──
const CERTIFICATIONS = [
  { label: "India Organic (NPOP)", status: "Active", expiry: "Mar 2027" },
  { label: "FSSAI License", status: "Active", expiry: "Nov 2026" },
  { label: "GlobalG.A.P. Certified", status: "Renewal Due", expiry: "Jul 2026" },
  { label: "Fair Trade Certified", status: "Active", expiry: "Jan 2027" },
];

// ── Settings ──
const SETTINGS_GROUPS = [
  {
    title: "Account",
    icon: HiOutlineUserCircle,
    items: [
      { label: "Profile details", desc: "Name, email, phone, delivery address" },
      { label: "Dietary Preferences", desc: "Vegan, Gluten-free, Allergies, Favorites" },
    ],
  },
  {
    title: "Security",
    icon: HiOutlineLockClosed,
    items: [
      { label: "Password", desc: "Last changed 2 months ago" },
      { label: "Two-factor authentication", desc: "Enabled via authenticator app" },
    ],
  },
  {
    title: "Payment",
    icon: HiOutlineCreditCard,
    items: [
      { label: "Payment methods", desc: "UPI, Credit Card, Net Banking" },
      { label: "Order history", desc: "View and download past invoices" },
    ],
  },
  {
    title: "Preferences",
    icon: HiOutlineLanguage,
    items: [
      { label: "Language", desc: "English (India)" },
      { label: "Notification settings", desc: "Email, SMS, and push alerts" },
      { label: "Delivery preferences", desc: "Morning, Evening, Flexible" },
      { label: "Seasonal updates", desc: "Weekly harvest notifications" },
    ],
  },
];

// ── FAQ ──
const FAQ_ITEMS = [
  { q: "How do I place an organic produce order?", a: "Browse our seasonal crops, select your items, and proceed to checkout. We deliver fresh within 24 hours." },
  { q: "How are organic certifications verified?", a: "All our farmers are certified organic by India Organic (NPOP). We verify certifications annually." },
  { q: "What if I receive damaged produce?", a: "Contact us within 24 hours with photos, and we'll issue a full refund or replacement." },
  { q: "Can I customize my weekly organic box?", a: "Yes! Select your preferred fruits, vegetables, and grains from our seasonal offerings." },
  { q: "How do subscriptions work?", a: "Choose a box, select delivery frequency, and get fresh organic produce delivered on schedule." },
];

// ── Support ──
const SUPPORT_CHANNELS = [
  { icon: HiOutlinePhone, label: "Call Support", detail: "+91 1800 200 3000 · 9 AM–7 PM" },
  { icon: HiOutlineChatBubbleLeftEllipsis, label: "Live Chat", detail: "Avg. response time: 4 minutes" },
  { icon: HiOutlineEnvelope, label: "Email Us", detail: "support@organicmarket.in" },
  { icon: HiOutlineVideoCamera, label: "Book a Demo Call", detail: "Walkthrough with our team" },
];

// ── View Headings ──
const VIEW_HEADINGS = {
  dashboard: { title: "Organic Market 🛒", subtitle: "Fresh, sustainable, and delivered to your door." },
  shop: { title: "Shop Organic", subtitle: "Browse our selection of fresh, certified organic produce." },
  orders: { title: "My Orders", subtitle: "Track every order from farm to table." },
  favorites: { title: "Your Favorites", subtitle: "Products you love, always at your fingertips." },
  subscriptions: { title: "Subscriptions", subtitle: "Manage your recurring organic deliveries." },
  analytics: { title: "Analytics", subtitle: "Your organic consumption and savings." },
  messages: { title: "Messages", subtitle: "Connect with farmers and our team." },
  settings: { title: "Settings", subtitle: "Manage your organic market account." },
  help: { title: "Help & Support", subtitle: "Questions about organic produce and delivery." },
};

// ── Utility Functions ──
function statusClass(status) {
  switch (status) {
    case "Delivered": return "status-pill delivered";
    case "Shipped": return "status-pill shipped";
    case "Processing": return "status-pill processing";
    case "Cancelled": return "status-pill cancelled";
    default: return "status-pill";
  }
}

function certClass(status) {
  return status === "Active" ? "cert-pill active" : "cert-pill due";
}

function toneClass(tone) {
  return `activity-icon ${tone}`;
}

function subscriptionClass(status) {
  return status === "Active" ? "status-pill delivered" : "status-pill processing";
}

function availabilityClass(inStock) {
  return inStock ? "status-pill delivered" : "status-pill cancelled";
}

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // activeView now lives in the URL (?view=messages) instead of local state.
  // When a button inside a tab sends the user to /404 and they press Back,
  // the browser restores this exact URL — including ?view=messages — so
  // this component renders with the right tab instead of resetting to
  // "dashboard".
  const requestedView = searchParams.get("view");
  const activeView = VIEW_HEADINGS[requestedView] ? requestedView : "dashboard";

  const handleLogout = () => {
    setSidebarOpen(false);
    navigate("/login");
  };

  const goToView = (view) => {
    setSearchParams(view === "dashboard" ? {} : { view });
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="dash-page">

      {sidebarOpen && <div className="dash-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* ── Sidebar ── */}
      <aside className={`dash-sidebar${sidebarOpen ? " open" : ""}`}>
        <div className="dash-logo-area">
          <div className="dash-logo-placeholder" aria-label="Logo">
            <img src={logo} alt="Organic Market" />
          </div>
          <button className="dash-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <HiOutlineXMark />
          </button>
        </div>

        <nav className="dash-nav">
          <span className="dash-nav-label">Organic Market</span>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.view === activeView;
            return (
              <button
                type="button"
                key={item.label}
                className={`dash-nav-item${isActive ? " active" : ""}`}
                onClick={() => goToView(item.view)}
              >
                <Icon className="dash-nav-icon" />
                <span>{item.label}</span>
                {isActive && <span className="dash-nav-dot" />}
              </button>
            );
          })}
        </nav>

        <div className="dash-sidebar-footer">
          <button type="button" className="dash-nav-item logout" onClick={handleLogout}>
            <HiOutlineArrowRightOnRectangle className="dash-nav-icon" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="dash-main">

        <header className="dash-topbar">
          <button className="dash-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <HiOutlineBars3 />
          </button>

          <div className="dash-search">
            <HiOutlineMagnifyingGlass className="dash-search-icon" />
            <input type="text" placeholder="Search organic produce…" />
          </div>

          <div className="dash-topbar-actions">
            <Link to="/404" className="dash-icon-btn" aria-label="Notifications">
              <HiOutlineBell />
              <span className="dash-icon-badge" />
            </Link>
          </div>
        </header>

        <main className="dash-content">

          <div className="dash-heading-row">
            <div>
              <h1>{VIEW_HEADINGS[activeView].title}</h1>
              <p>{VIEW_HEADINGS[activeView].subtitle}</p>
            </div>
            <div className="dash-heading-actions">
              <Link to="/404" className="btn-secondary">
                <HiOutlineArrowDownTray />
                Export Report
              </Link>
              <Link to="/404" className="btn-primary">+ Shop Now</Link>
            </div>
          </div>

          {activeView === "dashboard" && (
          <>
          {/* Weekly Offers */}
          <section className="weekly-offers">
            <div className="weekly-offers-header">
              <h3>🔥 Weekly Special Offers</h3>
              <Link to="/404" className="panel-link">View All</Link>
            </div>
            <div className="weekly-offers-grid">
              {WEEKLY_OFFERS.map((offer) => (
                <Link to="/404" className="offer-card" key={offer.name}>
                  <span className="offer-emoji">{offer.image}</span>
                  <span className="offer-name">{offer.name}</span>
                  <span className="offer-discount">{offer.discount}</span>
                  <span className="offer-price">{offer.price}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Stat cards */}
          <section className="dash-stats">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <Link to="/404" className="stat-card" key={s.label}>
                  <div className="stat-top-row">
                    <span className="stat-label">{s.label}</span>
                    <span className="stat-icon"><Icon /></span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-value">{s.value}</span>
                    <span className={`stat-delta ${s.up ? "up" : "down"}`}>
                      {s.up ? <HiOutlineArrowTrendingUp /> : <HiOutlineArrowTrendingDown />}
                      {s.delta}
                    </span>
                  </div>
                </Link>
              );
            })}
          </section>

          {/* Featured Products */}
          <section className="featured-products">
            <div className="featured-header">
              <h2>⭐ Featured Organic Products</h2>
              <Link to="/404" className="panel-link">View All</Link>
            </div>
            <div className="featured-grid">
              {FEATURED_PRODUCTS.map((product) => (
                <Link to="/404" className="product-card" key={product.id}>
                  <div className="product-card-image">
                    <span className="product-emoji">{product.image}</span>
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                  </div>
                  <div className="product-card-info">
                    <h4>{product.name}</h4>
                    <div className="product-card-meta">
                      <span className="product-price">{product.price}</span>
                      <span className="product-rating">★ {product.rating}</span>
                    </div>
                    {product.organic && <span className="organic-badge">🌱 Organic</span>}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Two-column panels */}
          <section className="dash-panels">

            <div className="panel panel-wide">
              <div className="panel-header">
                <h2>Recent Orders</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <div className="table-wrap">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Date</th>
                      <th>Delivery</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_ORDERS.map((o) => (
                      <tr key={o.id}>
                        <td className="muted">{o.id}</td>
                        <td className="strong">{o.product}</td>
                        <td className="muted">{o.qty}</td>
                        <td className="muted">{o.date}</td>
                        <td className="muted">{o.delivery}</td>
                        <td><span className={statusClass(o.status)}>{o.status}</span></td>
                        <td className="strong">{o.amount}</td>
                        <td>
                          <Link to="/404" className="row-action" aria-label="More options">
                            <HiOutlineEllipsisHorizontal />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Delivery Schedule</h2>
                <Link to="/404" className="panel-link">Manage</Link>
              </div>
              <ul className="delivery-list">
                {DELIVERY_SCHEDULE.map((d, i) => (
                  <li key={i}>
                    <Link to="/404" className="delivery-item">
                      <span className="delivery-day">{d.day}</span>
                      <div className="delivery-info">
                        <span className="delivery-status">{d.status}</span>
                        <span className="delivery-items">{d.items}</span>
                      </div>
                      <span className={`status-pill ${d.status === "Delivered" ? "delivered" : d.status === "Scheduled" ? "shipped" : "processing"}`}>
                        {d.status}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Activity + Subscriptions */}
          <section className="dash-panels">

            <div className="panel">
              <div className="panel-header">
                <h2>Activity Feed</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <ul className="activity-list">
                {ACTIVITY_FEED.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <li key={i}>
                      <Link to="/404" className="activity-item">
                        <span className={toneClass(a.tone)}><Icon /></span>
                        <div className="activity-text">
                          <span>{a.text}</span>
                          <span className="activity-time">
                            <HiOutlineClock /> {a.time}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="panel panel-wide">
              <div className="panel-header">
                <h2>Active Subscriptions</h2>
                <Link to="/404" className="panel-link">Manage</Link>
              </div>
              <ul className="subscription-list">
                {SUBSCRIPTIONS.map((s, i) => (
                  <li key={i}>
                    <Link to="/404" className="subscription-item">
                      <div className="subscription-icon">
                        {s.name.includes("Veg") ? "🥬" : s.name.includes("Fruit") ? "🍎" : "📦"}
                      </div>
                      <div className="subscription-text">
                        <span className="subscription-name">{s.name}</span>
                        <span className="subscription-items">{s.items}</span>
                        <span className="subscription-price">{s.price} · Next: {s.next}</span>
                      </div>
                      <span className={subscriptionClass(s.status)}>{s.status}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Shop Categories + Reviews + Favorites */}
          <section className="dash-panels dash-panels-three">

            <div className="panel">
              <div className="panel-header">
                <h2>Shop Categories</h2>
                <Link to="/404" className="panel-link">Browse</Link>
              </div>
              <div className="category-grid">
                {SHOP_CATEGORIES.slice(0, 6).map((cat) => (
                  <Link to="/404" className="category-item" key={cat.name}>
                    <span className="category-icon">{cat.icon}</span>
                    <span className="category-name">{cat.name}</span>
                    <span className="category-count">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Customer Reviews</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <ul className="review-list">
                {REVIEWS.map((r, i) => (
                  <li key={i}>
                    <Link to="/404" className="review-item">
                      <div className="review-top">
                        <span className="review-book">{r.product}</span>
                        <span className="review-stars">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <HiOutlineStar key={idx} className={idx < r.rating ? "filled" : ""} />
                          ))}
                        </span>
                      </div>
                      <p className="review-text">{r.text}</p>
                      <span className="review-by">— {r.reviewer}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Your Favorites</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <ul className="favorites-list">
                {FAVORITES.map((f, i) => (
                  <li key={i}>
                    <Link to="/404" className="favorite-item">
                      <span className="favorite-emoji">{f.image}</span>
                      <div className="favorite-text">
                        <span className="favorite-name">{f.name}</span>
                        <span className="favorite-price">{f.price}</span>
                      </div>
                      <span className={availabilityClass(f.inStock)}>
                        {f.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Messages + Certifications */}
          <section className="dash-panels">

            <div className="panel panel-wide">
              <div className="panel-header">
                <h2>Messages</h2>
                <Link to="/404" className="panel-link">Open inbox</Link>
              </div>
              <ul className="message-list">
                {MESSAGES_PREVIEW.map((m, i) => (
                  <li key={i}>
                    <Link to="/404" className="message-item">
                      <span className="message-avatar">{m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</span>
                      <div className="message-text">
                        <div className="message-top">
                          <span className="message-name">{m.name}</span>
                          <span className="message-time">{m.time}</span>
                        </div>
                        <span className="message-snippet">{m.snippet}</span>
                      </div>
                      {m.unread && <span className="message-dot" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Organic Certifications</h2>
                <Link to="/404" className="panel-link">Learn More</Link>
              </div>
              <div className="cert-grid">
                {CERTIFICATIONS.map((c) => (
                  <Link to="/404" className="cert-card" key={c.label}>
                    <div className="cert-top">
                      <HiOutlineClipboardDocumentList className="cert-icon" />
                      <span className={certClass(c.status)}>{c.status}</span>
                    </div>
                    <span className="cert-label">{c.label}</span>
                    <span className="cert-expiry">Valid until {c.expiry}</span>
                  </Link>
                ))}
              </div>
            </div>

          </section>

          {/* Quick actions */}
          <section className="panel quick-actions">
            <div className="panel-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-grid">
              <Link to="/404" className="quick-card">
                <HiOutlineShoppingBag />
                <span>Shop Now</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineClipboardDocumentList />
                <span>My Orders</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HeartIcon />
                <span>Favorites</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineArrowPath />
                <span>Subscriptions</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineTruck />
                <span>Track Delivery</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineSparkles />
                <span>Seasonal Picks</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineTag />
                <span>Special Offers</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlinePhone />
                <span>Contact Support</span>
              </Link>
              <Link to="/404" className="quick-card">
                <LeafIcon />
                <span>Learn Organic</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineFunnel />
                <span>Filter Produce</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineArrowPath />
                <span>Reorder</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineEnvelope />
                <span>Newsletter</span>
              </Link>
            </div>
          </section>
          </>
          )}

          {/* ══════════ SHOP VIEW ══════════ */}
          {activeView === "shop" && (
            <>
              <section className="panel">
                <div className="panel-header">
                  <h2>All Organic Products</h2>
                  <Link to="/404" className="panel-link">
                    <HiOutlineFunnel style={{ marginRight: "0.3rem" }} />
                    Filter
                  </Link>
                </div>
                <div className="shop-grid">
                  {FEATURED_PRODUCTS.map((product) => (
                    <Link to="/404" className="product-card" key={product.id}>
                      <div className="product-card-image">
                        <span className="product-emoji">{product.image}</span>
                        {product.badge && <span className="product-badge">{product.badge}</span>}
                      </div>
                      <div className="product-card-info">
                        <h4>{product.name}</h4>
                        <div className="product-card-meta">
                          <span className="product-price">{product.price}</span>
                          <span className="product-rating">★ {product.rating}</span>
                        </div>
                        {product.organic && <span className="organic-badge">🌱 Organic</span>}
                      </div>
                    </Link>
                  ))}
                  {/* Additional products */}
                  {FEATURED_PRODUCTS.map((product) => (
                    <Link to="/404" className="product-card" key={product.id + "dup"}>
                      <div className="product-card-image">
                        <span className="product-emoji">{product.image}</span>
                        {product.badge && <span className="product-badge">{product.badge}</span>}
                      </div>
                      <div className="product-card-info">
                        <h4>{product.name}</h4>
                        <div className="product-card-meta">
                          <span className="product-price">{product.price}</span>
                          <span className="product-rating">★ {product.rating}</span>
                        </div>
                        {product.organic && <span className="organic-badge">🌱 Organic</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* ══════════ ORDERS VIEW ══════════ */}
          {activeView === "orders" && (
            <section className="panel">
              <div className="panel-header">
                <h2>All Orders</h2>
                <Link to="/404" className="panel-link">Export CSV</Link>
              </div>
              <div className="table-wrap">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Date</th>
                      <th>Delivery</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_ORDERS.map((o) => (
                      <tr key={o.id}>
                        <td className="muted">{o.id}</td>
                        <td className="strong">{o.product}</td>
                        <td className="muted">{o.qty}</td>
                        <td className="muted">{o.date}</td>
                        <td className="muted">{o.delivery}</td>
                        <td><span className={statusClass(o.status)}>{o.status}</span></td>
                        <td className="strong">{o.amount}</td>
                        <td>
                          <Link to="/404" className="row-action" aria-label="More options">
                            <HiOutlineEllipsisHorizontal />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ══════════ FAVORITES VIEW ══════════ */}
          {activeView === "favorites" && (
            <section className="panel">
              <div className="panel-header">
                <h2>Your Favorite Products</h2>
                <Link to="/404" className="panel-link">Edit</Link>
              </div>
              <div className="favorites-grid">
                {FAVORITES.map((f) => (
                  <Link to="/404" className="favorite-card" key={f.name}>
                    <span className="favorite-emoji-large">{f.image}</span>
                    <div className="favorite-card-info">
                      <h4>{f.name}</h4>
                      <span className="favorite-price">{f.price}</span>
                      <span className={availabilityClass(f.inStock)}>
                        {f.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </Link>
                ))}
                {/* Duplicate for more items */}
                {FAVORITES.map((f) => (
                  <Link to="/404" className="favorite-card" key={f.name + "dup"}>
                    <span className="favorite-emoji-large">{f.image}</span>
                    <div className="favorite-card-info">
                      <h4>{f.name}</h4>
                      <span className="favorite-price">{f.price}</span>
                      <span className={availabilityClass(f.inStock)}>
                        {f.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ══════════ SUBSCRIPTIONS VIEW ══════════ */}
          {activeView === "subscriptions" && (
            <section className="panel">
              <div className="panel-header">
                <h2>Your Subscriptions</h2>
                <Link to="/404" className="panel-link">
                  <HiOutlinePlusCircle style={{ marginRight: "0.3rem" }} />
                  New Subscription
                </Link>
              </div>
              <ul className="subscription-list-large">
                {SUBSCRIPTIONS.map((s, i) => (
                  <li key={i}>
                    <Link to="/404" className="subscription-item-large">
                      <div className="subscription-icon-large">
                        {s.name.includes("Veg") ? "🥬" : s.name.includes("Fruit") ? "🍎" : "📦"}
                      </div>
                      <div className="subscription-details">
                        <span className="subscription-name-large">{s.name}</span>
                        <span className="subscription-items-large">{s.items}</span>
                        <span className="subscription-meta">{s.price} · Next delivery: {s.next}</span>
                      </div>
                      <span className={subscriptionClass(s.status)}>{s.status}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ══════════ ANALYTICS VIEW ══════════ */}
          {activeView === "analytics" && (
            <>
              <section className="dash-stats">
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Total Spent</span>
                    <span className="stat-icon"><HiOutlineBanknotes /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">₹1,24,800</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Orders</span>
                    <span className="stat-icon"><HiOutlineShoppingBag /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">147</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Avg. Order</span>
                    <span className="stat-icon"><HiOutlineScale /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">₹849</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Organic Saved</span>
                    <span className="stat-icon"><LeafIcon /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">124 kg</span></div>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <h2>Monthly Spending</h2>
                  <Link to="/404" className="panel-link">Export Report</Link>
                </div>
                <div className="bar-chart">
                  {[
                    { month: "Jan", value: 28 }, { month: "Feb", value: 32 }, 
                    { month: "Mar", value: 45 }, { month: "Apr", value: 52 },
                    { month: "May", value: 68 }, { month: "Jun", value: 72 }
                  ].map((m) => (
                    <div className="bar-chart-col" key={m.month}>
                      <div className="bar-chart-bar-wrap">
                        <div
                          className="bar-chart-bar"
                          style={{ height: `${(m.value / 80) * 100}%` }}
                          title={`₹${m.value}K`}
                        />
                      </div>
                      <span className="bar-chart-label">{m.month}</span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* ══════════ MESSAGES VIEW ══════════ */}
          {activeView === "messages" && (
            <section className="panel">
              <div className="panel-header">
                <h2>Messages</h2>
                <Link to="/404" className="panel-link">
                  <HiOutlinePaperAirplane style={{ marginRight: "0.3rem" }} />
                  New Message
                </Link>
              </div>
              <ul className="message-list">
                {MESSAGES_PREVIEW.map((m, i) => (
                  <li key={i}>
                    <Link to="/404" className="message-item">
                      <span className="message-avatar">{m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</span>
                      <div className="message-text">
                        <div className="message-top">
                          <span className="message-name">{m.name}</span>
                          <span className="message-time">{m.time}</span>
                        </div>
                        <span className="message-snippet">{m.snippet}</span>
                      </div>
                      {m.unread && <span className="message-dot" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ══════════ SETTINGS VIEW ══════════ */}
          {activeView === "settings" && (
            <section className="dash-panels-three settings-grid">
              {SETTINGS_GROUPS.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <div className="panel" key={group.title}>
                    <div className="panel-header">
                      <h2><GroupIcon style={{ marginRight: "0.5rem", verticalAlign: "-3px", color: "var(--green)" }} />{group.title}</h2>
                    </div>
                    <ul className="settings-list">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link to="/404" className="settings-item">
                            <div className="settings-text">
                              <span className="settings-label">{item.label}</span>
                              <span className="settings-desc">{item.desc}</span>
                            </div>
                            <HiOutlineChevronRight className="settings-chevron" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>
          )}

          {/* ══════════ HELP VIEW ══════════ */}
          {activeView === "help" && (
            <>
              <section className="dash-panels">
                <div className="panel panel-wide">
                  <div className="panel-header">
                    <h2>Frequently Asked Questions</h2>
                    <Link to="/404" className="panel-link">
                      <HiOutlineBookOpen style={{ marginRight: "0.3rem" }} />
                      Full Help Center
                    </Link>
                  </div>
                  <ul className="faq-list">
                    {FAQ_ITEMS.map((f) => (
                      <li key={f.q} className="faq-item">
                        <span className="faq-q">{f.q}</span>
                        <span className="faq-a">{f.a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="panel">
                  <div className="panel-header">
                    <h2>Contact Us</h2>
                  </div>
                  <ul className="support-list">
                    {SUPPORT_CHANNELS.map((s) => {
                      const SIcon = s.icon;
                      return (
                        <li key={s.label}>
                          <Link to="/404" className="support-item">
                            <span className="support-icon"><SIcon /></span>
                            <div className="support-text">
                              <span className="support-label">{s.label}</span>
                              <span className="support-detail">{s.detail}</span>
                            </div>
                            <HiOutlineArrowTopRightOnSquare className="settings-chevron" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </>
          )}

        </main>
      </div>
    </div>
  );
}