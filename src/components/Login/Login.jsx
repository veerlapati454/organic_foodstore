import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = value;

    if (name === "email") {
      processedValue = value.toLowerCase();
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : processedValue,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Please use a valid Gmail address (example@gmail.com)";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (formData.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }, 1500);
    }
  };

  const socialLogins = [
    { id: "google", label: "Google" },
    { id: "apple", label: "Apple" },
    { id: "facebook", label: "Facebook" },
  ];

  return (
    <div className="login-page">
      {/* Background Elements */}
      <div className="login-bg-elements">
        <div className="login-bg-circle login-bg-circle--1" />
        <div className="login-bg-circle login-bg-circle--2" />
        <div className="login-bg-circle login-bg-circle--3" />
        <div className="login-bg-pattern" />
      </div>

      {/* Main Container */}
      <div className="login-container">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Back Button */}
          <Link to="/" className="login-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div className="login-header">
            <h1 className="login-title">Welcome to the Market</h1>
            <p className="login-subtitle">
              Fresh from the farm, straight to your table
            </p>
          </div>

          {/* Tabs */}
          <div className="login-tabs">
            <button
              className={`login-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Sign In
            </button>
            <button
              className={`login-tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            {activeTab === "login" ? (
              <motion.form
                key="login"
                className="login-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Role Selection */}
                <div className="login-field">
                  <label className="login-label">Login As</label>
                  <div className="login-role-selector">
                    <button
                      type="button"
                      className={`login-role-btn ${formData.role === "user" ? "active" : ""}`}
                      onClick={() => setFormData({ ...formData, role: "user" })}
                    >
                      <span className="login-role-label">User</span>
                      <span className="login-role-badge">Customer</span>
                    </button>
                    <button
                      type="button"
                      className={`login-role-btn ${formData.role === "admin" ? "active" : ""}`}
                      onClick={() => setFormData({ ...formData, role: "admin" })}
                    >
                      <span className="login-role-label">Admin</span>
                      <span className="login-role-badge">Manager</span>
                    </button>
                  </div>
                </div>

                {/* Email - Gmail only */}
                <div className="login-field">
                  <label className="login-label">
                    Email Address <span className="login-required">(Gmail only)</span>
                  </label>
                  <div className="login-input-group">
                    <input
                      type="email"
                      name="email"
                      className={`login-input ${errors.email ? "error" : ""}`}
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && (
                    <span className="login-error">{errors.email}</span>
                  )}
                  <div className="login-email-hint">
                    Only Gmail addresses are accepted
                  </div>
                </div>

                {/* Password with Eye Toggle */}
                <div className="login-field">
                  <label className="login-label">Password</label>
                  <div className="login-input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`login-input login-input--with-toggle ${errors.password ? "error" : ""}`}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="login-password-toggle"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      aria-pressed={showPassword}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="login-error">{errors.password}</span>
                  )}
                </div>

                {/* Role Info */}
                <div className="login-role-info">
                  <div className="login-role-info-item">
                    <span className="login-role-info-dot user"></span>
                    <span className="login-role-info-text">
                      User: Access your farm dashboard & orders
                    </span>
                  </div>
                  <div className="login-role-info-item">
                    <span className="login-role-info-dot admin"></span>
                    <span className="login-role-info-text">
                      Admin: Manage products, orders & users
                    </span>
                  </div>
                </div>

                <div className="login-options">
                  <label className="login-checkbox">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <span>Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="login-forgot-link">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="login-submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="login-spinner" />
                      Signing In as {formData.role === "admin" ? "Admin" : "User"}...
                    </>
                  ) : (
                    `Sign In as ${formData.role === "admin" ? "Admin" : "User"}`
                  )}
                </button>

                <div className="login-divider">
                  <span>Or continue with</span>
                </div>

                <div className="login-social">
                  {socialLogins.map((provider) => (
                    <button
                      key={provider.id}
                      type="button"
                      className="login-social-btn"
                      onClick={() => navigate("/404")}
                    >
                      {provider.label}
                    </button>
                  ))}
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="signup"
                className="login-signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="login-benefits-list">
                  <div className="login-benefit-item">
                    <div>
                      <h4>Fresh Organic Produce</h4>
                      <p>Weekly deliveries from local farms</p>
                    </div>
                  </div>
                  <div className="login-benefit-item">
                    <div>
                      <h4>Community Supported</h4>
                      <p>Join a network of conscious eaters</p>
                    </div>
                  </div>
                  <div className="login-benefit-item">
                    <div>
                      <h4>Workshops & Events</h4>
                      <p>Learn from experienced farmers</p>
                    </div>
                  </div>
                  <div className="login-benefit-item">
                    <div>
                      <h4>Sustainable Future</h4>
                      <p>Support regenerative agriculture</p>
                    </div>
                  </div>
                </div>

                <Link to="/signup" className="login-signup-cta">
                  <span>Create Your Free Account</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <p className="login-signup-note">
                  Already have an account?{" "}
                  <button
                    className="login-signup-switch"
                    onClick={() => setActiveTab("login")}
                  >
                    Sign In
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <div className="login-footer">
          <p className="login-footer-text">
            By continuing, you agree to our{" "}
            <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;