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
  HiOutlineShieldCheck,
  HiOutlineBuildingStorefront,
  HiOutlineCurrencyRupee,
  HiOutlineTrophy,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineGift,
  HiOutlineRocketLaunch,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import "./AdminDashboard.css";
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
  { label: "Orders", icon: HiOutlineClipboardDocumentList, view: "orders" },
  { label: "Products", icon: HiOutlineShoppingBag, view: "products" },
  { label: "Customers", icon: HiOutlineUserGroup, view: "customers" },
  { label: "Inventory", icon: HiOutlineCube, view: "inventory" },
  { label: "Farmers", icon: LeafIcon, view: "farmers" },
  { label: "Analytics", icon: HiOutlineChartBar, view: "analytics" },
  { label: "Messages", icon: HiOutlineChatBubbleLeftRight, view: "messages" },
  { label: "Settings", icon: HiOutlineCog6Tooth, view: "settings" },
  { label: "Help & Support", icon: HiOutlineQuestionMarkCircle, view: "help" },
];

// ── Stats ──
const STATS = [
  { label: "Total Revenue", value: "₹8,42,500", up: true, icon: HiOutlineBanknotes, delta: "+23.5%" },
  { label: "Total Orders", value: "1,284", up: true, icon: HiOutlineClipboardDocumentList, delta: "+18%" },
  { label: "Active Customers", value: "847", up: true, icon: HiOutlineUsers, delta: "+12%" },
  { label: "Pending Orders", value: "42", up: false, icon: HiOutlineClock, delta: "-8%" },
  { label: "Avg. Order Value", value: "₹2,180", up: true, icon: HiOutlineScale, delta: "+5.2%" },
  { label: "Organic Certified", value: "156", up: true, icon: HiOutlineShieldCheck, delta: "+3" },
];

// ── Recent Orders ──
const RECENT_ORDERS = [
  { id: "#HV-5031", customer: "Priya Sharma", product: "Organic Alphonso Mangoes", status: "Delivered", amount: "₹1,200", date: "Jun 28", payment: "UPI" },
  { id: "#HV-5030", customer: "Rahul Mehta", product: "Basmati Rice (5kg)", status: "Shipped", amount: "₹2,400", date: "Jun 28", payment: "Card" },
  { id: "#HV-5029", customer: "Ananya Patel", product: "Fresh Organic Spinach", status: "Processing", amount: "₹340", date: "Jun 27", payment: "Net Banking" },
  { id: "#HV-5028", customer: "Vikram Singh", product: "Alphonso Mangoes Box", status: "Delivered", amount: "₹3,100", date: "Jun 27", payment: "UPI" },
  { id: "#HV-5027", customer: "Sneha Reddy", product: "Organic Millets Mix", status: "Cancelled", amount: "₹890", date: "Jun 26", payment: "Card" },
  { id: "#HV-5026", customer: "Arjun Nair", product: "Cold-Pressed Coconut Oil", status: "Delivered", amount: "₹1,560", date: "Jun 26", payment: "UPI" },
];

// ── Top Products ──
const TOP_PRODUCTS = [
  { name: "Organic Alphonso Mangoes", sales: 342, revenue: "₹1,06,020", trend: "up" },
  { name: "Basmati Rice (5kg)", sales: 287, revenue: "₹68,880", trend: "up" },
  { name: "Desi Ghee (500ml)", sales: 198, revenue: "₹1,88,100", trend: "up" },
  { name: "Cold-Pressed Coconut Oil", sales: 165, revenue: "₹42,900", trend: "down" },
  { name: "Fresh Organic Spinach", sales: 152, revenue: "₹4,256", trend: "up" },
  { name: "Turmeric Powder (250g)", sales: 143, revenue: "₹12,012", trend: "down" },
];

// ── Recent Customers ──
const RECENT_CUSTOMERS = [
  { name: "Priya Sharma", email: "priya.s@email.com", orders: 12, spent: "₹28,400", joined: "Jun 28" },
  { name: "Rahul Mehta", email: "rahul.m@email.com", orders: 8, spent: "₹16,200", joined: "Jun 27" },
  { name: "Ananya Patel", email: "ananya.p@email.com", orders: 5, spent: "₹9,850", joined: "Jun 27" },
  { name: "Vikram Singh", email: "vikram.s@email.com", orders: 15, spent: "₹35,700", joined: "Jun 26" },
  { name: "Sneha Reddy", email: "sneha.r@email.com", orders: 3, spent: "₹4,200", joined: "Jun 26" },
];

// ── Inventory Alerts ──
const INVENTORY_ALERTS = [
  { product: "Organic Alphonso Mangoes", stock: 24, minStock: 30, status: "Low Stock" },
  { product: "Fresh Organic Spinach", stock: 8, minStock: 15, status: "Critical" },
  { product: "Desi Ghee (500ml)", stock: 45, minStock: 20, status: "In Stock" },
  { product: "Organic Millets Mix", stock: 12, minStock: 25, status: "Low Stock" },
];

// ── Pending Reviews ──
const PENDING_REVIEWS = [
  { product: "Alphonso Mangoes", customer: "Priya Sharma", rating: 5, text: "Absolutely divine! Best mangoes ever.", date: "Jun 28" },
  { product: "Basmati Rice", customer: "Rahul Mehta", rating: 4, text: "Great quality, delivery on time.", date: "Jun 27" },
  { product: "Desi Ghee", customer: "Ananya Patel", rating: 5, text: "Pure and authentic. Love it!", date: "Jun 27" },
  { product: "Coconut Oil", customer: "Vikram Singh", rating: 3, text: "Good product but packaging could be better.", date: "Jun 26" },
];

// ── Farmers ──
const FARMERS = [
  { name: "Village Fresh Farms", products: 24, revenue: "₹2,45,000", rating: 4.9, verified: true, location: "Pune, MH" },
  { name: "Green Valley Organics", products: 18, revenue: "₹1,82,500", rating: 4.8, verified: true, location: "Nasik, MH" },
  { name: "Sahyadri Harvest", products: 12, revenue: "₹98,200", rating: 4.7, verified: true, location: "Satara, MH" },
  { name: "Nature's Bounty", products: 8, revenue: "₹54,800", rating: 4.6, verified: false, location: "Kolhapur, MH" },
];

// ── Activity Feed ──
const ACTIVITY_FEED = [
  { icon: HiOutlineUserPlus, text: "New customer registration: Priya Sharma", time: "8 minutes ago", tone: "green" },
  { icon: HiOutlineCheckCircle, text: "Order #HV-5031 delivered successfully", time: "2 hours ago", tone: "success" },
  { icon: HiOutlineTruck, text: "Order #HV-5030 shipped to Rahul Mehta", time: "4 hours ago", tone: "info" },
  { icon: HiOutlineDocumentPlus, text: "New product added: Organic Heirloom Tomatoes", time: "6 hours ago", tone: "green" },
  { icon: HiOutlineExclamationCircle, text: "Low stock alert: Organic Spinach (8 units left)", time: "Yesterday", tone: "error" },
  { icon: HiOutlineGlobeAlt, text: "Website traffic increased by 15% this week", time: "Yesterday", tone: "info" },
];

// ── Settings ──
const SETTINGS_GROUPS = [
  {
    title: "Store Settings",
    icon: HiOutlineBuildingStorefront,
    items: [
      { label: "General Settings", desc: "Store name, address, contact details" },
      { label: "Payment Gateways", desc: "UPI, Cards, Net Banking, COD" },
      { label: "Shipping Methods", desc: "Standard, Express, Same-day" },
    ],
  },
  {
    title: "Product Management",
    icon: HiOutlineShoppingBag,
    items: [
      { label: "Categories", desc: "Manage product categories & attributes" },
      { label: "Inventory Alerts", desc: "Set stock thresholds & notifications" },
      { label: "Bulk Upload", desc: "Upload products in bulk via CSV" },
    ],
  },
  {
    title: "User Management",
    icon: HiOutlineUserGroup,
    items: [
      { label: "Admin Accounts", desc: "Manage staff & permissions" },
      { label: "Customer Management", desc: "View & manage customer accounts" },
      { label: "Farmer Onboarding", desc: "Approve & manage farmer profiles" },
    ],
  },
  {
    title: "System Settings",
    icon: HiOutlineCog6Tooth,
    items: [
      { label: "Email Templates", desc: "Order confirmations, invoices, alerts" },
      { label: "Tax & Pricing", desc: "GST settings, pricing rules" },
      { label: "Security & Backup", desc: "Two-factor auth, data backups" },
    ],
  },
];

// ── FAQ ──
const FAQ_ITEMS = [
  { q: "How to add a new product?", a: "Go to Products → Add New Product. Fill in the details including price, stock, images, and certifications." },
  { q: "How to manage inventory alerts?", a: "Settings → Inventory Alerts. Set minimum stock levels for each product category." },
  { q: "What payment methods are supported?", a: "UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery are all supported." },
  { q: "How to onboard new farmers?", a: "Farmers → Onboard Farmer. Review their certification and approve after verification." },
  { q: "How to generate sales reports?", a: "Analytics → Reports. Select date range and export as CSV or PDF." },
];

// ── Support Channels ──
const SUPPORT_CHANNELS = [
  { icon: HiOutlinePhone, label: "Call Support", detail: "+91 1800 200 3000 · 9 AM–7 PM" },
  { icon: HiOutlineChatBubbleLeftEllipsis, label: "Live Chat", detail: "Avg. response time: 2 minutes" },
  { icon: HiOutlineEnvelope, label: "Email Us", detail: "admin@organicmarket.in" },
  { icon: HiOutlineVideoCamera, label: "Schedule Demo", detail: "Product walkthrough with our team" },
];

// ── View Headings ──
const VIEW_HEADINGS = {
  dashboard: { title: "Admin Dashboard 🌿", subtitle: "Manage your organic marketplace operations." },
  orders: { title: "Order Management", subtitle: "View and manage all customer orders." },
  products: { title: "Product Catalog", subtitle: "Manage your organic product inventory." },
  customers: { title: "Customer Management", subtitle: "View and manage all customer accounts." },
  inventory: { title: "Inventory Management", subtitle: "Track stock levels and manage products." },
  farmers: { title: "Farmer Management", subtitle: "Onboard and manage partner farmers." },
  analytics: { title: "Analytics & Reports", subtitle: "Track revenue, growth, and performance metrics." },
  messages: { title: "Messages", subtitle: "Communicate with customers and farmers." },
  settings: { title: "Settings", subtitle: "Manage your store configuration." },
  help: { title: "Help & Support", subtitle: "Get assistance with store operations." },
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

function inventoryStatusClass(status) {
  switch (status) {
    case "Critical": return "status-pill cancelled";
    case "Low Stock": return "status-pill processing";
    default: return "status-pill delivered";
  }
}

function toneClass(tone) {
  return `activity-icon ${tone}`;
}

function farmerVerifiedClass(verified) {
  return verified ? "status-pill delivered" : "status-pill processing";
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // ── Active view now lives in the URL (?view=messages) instead of only
  // in React state. This is what makes the browser "Back" button work
  // correctly: when you leave this page (e.g. click a link that goes to
  // the 404 page) and then go back, the browser returns to whatever URL
  // was last recorded — and since that URL includes the view, this
  // component restores the exact same section on remount instead of
  // always resetting to "dashboard".
  const [searchParams, setSearchParams] = useSearchParams();
  const activeView = searchParams.get("view") || "dashboard";

  const handleLogout = () => {
    setSidebarOpen(false);
    navigate("/login");
  };

  const goToView = (view) => {
    // replace: true keeps the back-stack clean — switching between
    // sidebar sections doesn't pile up history entries, but the
    // *current* history entry always reflects the section you're on.
    setSearchParams({ view }, { replace: true });
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="admin-page">

      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* ── Sidebar ── */}
      <aside className={`admin-sidebar${sidebarOpen ? " open" : ""}`}>
        <div className="admin-logo-area">
          <div className="admin-logo-placeholder" aria-label="Logo">
            <img src={logo} alt="Organic Market Admin" />
          </div>
          <button className="admin-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <HiOutlineXMark />
          </button>
        </div>

        <nav className="admin-nav">
          <span className="admin-nav-label">Admin Panel</span>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.view === activeView;
            return (
              <button
                type="button"
                key={item.label}
                className={`admin-nav-item${isActive ? " active" : ""}`}
                onClick={() => goToView(item.view)}
              >
                <Icon className="admin-nav-icon" />
                <span>{item.label}</span>
                {isActive && <span className="admin-nav-dot" />}
              </button>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer">
          <button type="button" className="admin-nav-item logout" onClick={handleLogout}>
            <HiOutlineArrowRightOnRectangle className="admin-nav-icon" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="admin-main">

        <header className="admin-topbar">
          <button className="admin-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <HiOutlineBars3 />
          </button>

          <div className="admin-search">
            <HiOutlineMagnifyingGlass className="admin-search-icon" />
            <input type="text" placeholder="Search orders, products, customers…" />
          </div>

          <div className="admin-topbar-actions">
            <span className="admin-badge">Admin</span>
            <Link to="/404" className="admin-icon-btn" aria-label="Notifications">
              <HiOutlineBell />
              <span className="admin-icon-badge" />
            </Link>
          </div>
        </header>

        <main className="admin-content">

          <div className="admin-heading-row">
            <div>
              <h1>{VIEW_HEADINGS[activeView].title}</h1>
              <p>{VIEW_HEADINGS[activeView].subtitle}</p>
            </div>
            <div className="admin-heading-actions">
              <Link to="/404" className="btn-secondary">
                <HiOutlineArrowDownTray />
                Export Report
              </Link>
              <Link to="/404" className="btn-primary">
                <HiOutlinePlusCircle />
                Add New
              </Link>
            </div>
          </div>

          {activeView === "dashboard" && (
          <>
          {/* Stat cards */}
          <section className="admin-stats">
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

          {/* Two-column panels */}
          <section className="admin-panels">

            <div className="panel panel-wide">
              <div className="panel-header">
                <h2>Recent Orders</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Payment</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_ORDERS.map((o) => (
                      <tr key={o.id}>
                        <td className="muted">{o.id}</td>
                        <td className="strong">{o.customer}</td>
                        <td className="muted">{o.product}</td>
                        <td className="muted">{o.date}</td>
                        <td><span className={statusClass(o.status)}>{o.status}</span></td>
                        <td className="strong">{o.amount}</td>
                        <td className="muted">{o.payment}</td>
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
                <h2>Inventory Alerts</h2>
                <Link to="/404" className="panel-link">Manage</Link>
              </div>
              <ul className="inventory-list">
                {INVENTORY_ALERTS.map((item, i) => (
                  <li key={i}>
                    <Link to="/404" className="inventory-item">
                      <div className="inventory-info">
                        <span className="inventory-name">{item.product}</span>
                        <span className="inventory-stock">Stock: {item.stock} / Min: {item.minStock}</span>
                      </div>
                      <span className={inventoryStatusClass(item.status)}>{item.status}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Activity + Top Products */}
          <section className="admin-panels">

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
                <h2>Top Selling Products</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <ul className="product-rank-list">
                {TOP_PRODUCTS.map((p, i) => (
                  <li key={i}>
                    <Link to="/404" className="product-rank-item">
                      <span className="product-rank-number">#{i + 1}</span>
                      <div className="product-rank-info">
                        <span className="product-rank-name">{p.name}</span>
                        <span className="product-rank-sales">{p.sales} units sold</span>
                      </div>
                      <span className="product-rank-revenue">{p.revenue}</span>
                      <span className={`trend-indicator ${p.trend}`}>
                        {p.trend === "up" ? <HiOutlineArrowTrendingUp /> : <HiOutlineArrowTrendingDown />}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Customers + Reviews + Farmers */}
          <section className="admin-panels-three">

            <div className="panel">
              <div className="panel-header">
                <h2>Recent Customers</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <ul className="customer-list">
                {RECENT_CUSTOMERS.map((c, i) => (
                  <li key={i}>
                    <Link to="/404" className="customer-item">
                      <div className="customer-avatar">
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="customer-info">
                        <span className="customer-name">{c.name}</span>
                        <span className="customer-email">{c.email}</span>
                        <span className="customer-meta">{c.orders} orders · ₹{c.spent}</span>
                      </div>
                      <span className="customer-joined">{c.joined}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Pending Reviews</h2>
                <Link to="/404" className="panel-link">View all</Link>
              </div>
              <ul className="review-list">
                {PENDING_REVIEWS.map((r, i) => (
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
                      <p className="review-text">"{r.text}"</p>
                      <div className="review-meta">
                        <span className="review-by">— {r.customer}</span>
                        <span className="review-date">{r.date}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Partner Farmers</h2>
                <Link to="/404" className="panel-link">Onboard New</Link>
              </div>
              <ul className="farmer-list">
                {FARMERS.map((f, i) => (
                  <li key={i}>
                    <Link to="/404" className="farmer-item">
                      <div className="farmer-icon">
                        <LeafIcon />
                      </div>
                      <div className="farmer-info">
                        <span className="farmer-name">{f.name}</span>
                        <span className="farmer-location"><HiOutlineMapPin /> {f.location}</span>
                        <span className="farmer-meta">{f.products} products · ₹{f.revenue}</span>
                      </div>
                      <div className="farmer-right">
                        <span className="farmer-rating">★ {f.rating}</span>
                        <span className={farmerVerifiedClass(f.verified)}>
                          {f.verified ? "Verified" : "Pending"}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Quick actions */}
          <section className="panel quick-actions">
            <div className="panel-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-grid">
              <Link to="/404" className="quick-card">
                <HiOutlineUserPlus />
                <span>Add Customer</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineDocumentPlus />
                <span>Add Product</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineClipboardDocumentList />
                <span>Process Orders</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineTruck />
                <span>Manage Shipments</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineUserPlus />
                <span>Onboard Farmer</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineChartBar />
                <span>View Reports</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineBell />
                <span>Send Notifications</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineGift />
                <span>Run Promotion</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineCloudArrowUp />
                <span>Backup Data</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineEnvelope />
                <span>Send Newsletter</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlineRocketLaunch />
                <span>Launch Campaign</span>
              </Link>
              <Link to="/404" className="quick-card">
                <HiOutlinePencilSquare />
                <span>Edit Settings</span>
              </Link>
            </div>
          </section>
          </>
          )}

          {/* ══════════ ORDERS VIEW ══════════ */}
          {activeView === "orders" && (
            <section className="panel">
              <div className="panel-header">
                <h2>All Orders</h2>
                <div className="panel-actions">
                  <Link to="/404" className="panel-link">
                    <HiOutlineFunnel style={{ marginRight: "0.3rem" }} />
                    Filter
                  </Link>
                  <Link to="/404" className="panel-link">Export</Link>
                </div>
              </div>
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Payment</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...RECENT_ORDERS, ...RECENT_ORDERS].map((o, idx) => (
                      <tr key={idx}>
                        <td className="muted">{o.id}</td>
                        <td className="strong">{o.customer}</td>
                        <td className="muted">{o.product}</td>
                        <td className="muted">{o.date}</td>
                        <td><span className={statusClass(o.status)}>{o.status}</span></td>
                        <td className="strong">{o.amount}</td>
                        <td className="muted">{o.payment}</td>
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

          {/* ══════════ PRODUCTS VIEW ══════════ */}
          {activeView === "products" && (
            <section className="panel">
              <div className="panel-header">
                <h2>Product Catalog</h2>
                <Link to="/404" className="panel-link">
                  <HiOutlinePlusCircle style={{ marginRight: "0.3rem" }} />
                  Add Product
                </Link>
              </div>
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Certification</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Organic Alphonso Mangoes", category: "Fruits", price: "₹310/kg", stock: 24, cert: "NPOP", status: "In Stock" },
                      { name: "Basmati Rice (5kg)", category: "Grains", price: "₹120/kg", stock: 156, cert: "NPOP", status: "In Stock" },
                      { name: "Desi Ghee (500ml)", category: "Dairy", price: "₹950/jar", stock: 45, cert: "FSSAI", status: "In Stock" },
                      { name: "Cold-Pressed Coconut Oil", category: "Oils", price: "₹260/L", stock: 12, cert: "NPOP", status: "Low Stock" },
                      { name: "Fresh Organic Spinach", category: "Vegetables", price: "₹28/bunch", stock: 8, cert: "NPOP", status: "Critical" },
                    ].map((p, i) => (
                      <tr key={i}>
                        <td className="strong">{p.name}</td>
                        <td className="muted">{p.category}</td>
                        <td className="muted">{p.price}</td>
                        <td className="muted">{p.stock}</td>
                        <td><span className="cert-pill">{p.cert}</span></td>
                        <td><span className={inventoryStatusClass(p.status)}>{p.status}</span></td>
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

          {/* ══════════ CUSTOMERS VIEW ══════════ */}
          {activeView === "customers" && (
            <section className="panel">
              <div className="panel-header">
                <h2>Customer Management</h2>
                <Link to="/404" className="panel-link">
                  <HiOutlineUserPlus style={{ marginRight: "0.3rem" }} />
                  Add Customer
                </Link>
              </div>
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Orders</th>
                      <th>Total Spent</th>
                      <th>Joined</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ...RECENT_CUSTOMERS,
                      { name: "Deepak Kumar", email: "deepak.k@email.com", orders: 6, spent: "₹11,200", joined: "Jun 25" },
                      { name: "Meera Iyer", email: "meera.i@email.com", orders: 9, spent: "₹18,500", joined: "Jun 24" },
                    ].map((c, i) => (
                      <tr key={i}>
                        <td className="strong">{c.name}</td>
                        <td className="muted">{c.email}</td>
                        <td className="muted">{c.orders}</td>
                        <td className="muted">{c.spent}</td>
                        <td className="muted">{c.joined}</td>
                        <td><span className="status-pill delivered">Active</span></td>
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

          {/* ══════════ INVENTORY VIEW ══════════ */}
          {activeView === "inventory" && (
            <>
              <section className="admin-panels">
                <div className="panel panel-wide">
                  <div className="panel-header">
                    <h2>Inventory Overview</h2>
                    <Link to="/404" className="panel-link">Update Stock</Link>
                  </div>
                  <div className="table-wrap">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Category</th>
                          <th>Current Stock</th>
                          <th>Min Stock</th>
                          <th>Status</th>
                          <th>Last Updated</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Organic Alphonso Mangoes", category: "Fruits", stock: 24, min: 30, status: "Low Stock", updated: "Jun 28" },
                          { name: "Basmati Rice (5kg)", category: "Grains", stock: 156, min: 50, status: "In Stock", updated: "Jun 28" },
                          { name: "Desi Ghee (500ml)", category: "Dairy", stock: 45, min: 20, status: "In Stock", updated: "Jun 27" },
                          { name: "Cold-Pressed Coconut Oil", category: "Oils", stock: 12, min: 25, status: "Low Stock", updated: "Jun 27" },
                          { name: "Fresh Organic Spinach", category: "Vegetables", stock: 8, min: 15, status: "Critical", updated: "Jun 27" },
                          { name: "Turmeric Powder (250g)", category: "Spices", stock: 67, min: 40, status: "In Stock", updated: "Jun 26" },
                        ].map((item, i) => (
                          <tr key={i}>
                            <td className="strong">{item.name}</td>
                            <td className="muted">{item.category}</td>
                            <td className="muted">{item.stock}</td>
                            <td className="muted">{item.min}</td>
                            <td><span className={inventoryStatusClass(item.status)}>{item.status}</span></td>
                            <td className="muted">{item.updated}</td>
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
              </section>
            </>
          )}

          {/* ══════════ FARMERS VIEW ══════════ */}
          {activeView === "farmers" && (
            <section className="panel">
              <div className="panel-header">
                <h2>Partner Farmers</h2>
                <Link to="/404" className="panel-link">
                  <HiOutlineUserPlus style={{ marginRight: "0.3rem" }} />
                  Onboard Farmer
                </Link>
              </div>
              <ul className="farmer-list-large">
                {FARMERS.map((f, i) => (
                  <li key={i}>
                    <Link to="/404" className="farmer-item-large">
                      <div className="farmer-icon-large">
                        <LeafIcon />
                      </div>
                      <div className="farmer-details">
                        <span className="farmer-name-large">{f.name}</span>
                        <span className="farmer-location-large"><HiOutlineMapPin /> {f.location}</span>
                        <span className="farmer-stats">{f.products} products · ₹{f.revenue} revenue</span>
                      </div>
                      <div className="farmer-right-large">
                        <span className="farmer-rating-large">★ {f.rating}</span>
                        <span className={farmerVerifiedClass(f.verified)}>
                          {f.verified ? "Verified" : "Pending"}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ══════════ ANALYTICS VIEW ══════════ */}
          {activeView === "analytics" && (
            <>
              <section className="admin-stats">
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Total Revenue</span>
                    <span className="stat-icon"><HiOutlineBanknotes /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">₹8,42,500</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Total Orders</span>
                    <span className="stat-icon"><HiOutlineClipboardDocumentList /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">1,284</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Avg. Order</span>
                    <span className="stat-icon"><HiOutlineScale /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">₹2,180</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-top-row">
                    <span className="stat-label">Total Customers</span>
                    <span className="stat-icon"><HiOutlineUsers /></span>
                  </div>
                  <div className="stat-row"><span className="stat-value">847</span></div>
                </div>
              </section>

              <section className="panel">
                <div className="panel-header">
                  <h2>Monthly Revenue</h2>
                  <Link to="/404" className="panel-link">Export Report</Link>
                </div>
                <div className="bar-chart">
                  {[
                    { month: "Jan", value: 45 }, { month: "Feb", value: 52 }, 
                    { month: "Mar", value: 68 }, { month: "Apr", value: 74 },
                    { month: "May", value: 82 }, { month: "Jun", value: 95 }
                  ].map((m) => (
                    <div className="bar-chart-col" key={m.month}>
                      <div className="bar-chart-bar-wrap">
                        <div
                          className="bar-chart-bar"
                          style={{ height: `${(m.value / 100) * 100}%` }}
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
                {[
                  { name: "Priya Sharma", snippet: "When will my mangoes be delivered?", time: "5m", unread: true },
                  { name: "Village Fresh Farms", snippet: "New harvest ready for pickup.", time: "1h", unread: true },
                  { name: "Rahul Mehta", snippet: "Can I add items to my order?", time: "3h", unread: false },
                  { name: "Support Team", snippet: "System update scheduled tonight.", time: "Yesterday", unread: false },
                ].map((m, i) => (
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
            <section className="admin-panels-three settings-grid">
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
              <section className="admin-panels">
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
                    <h2>Contact Support</h2>
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