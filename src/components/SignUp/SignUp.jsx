import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    receiveUpdates: true,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = value;

    // Username - only alphabets, no spaces
    if (name === "username") {
      processedValue = value.replace(/[^a-zA-Z]/g, '');
    }

    // Full Name - only alphabets and spaces
    if (name === "fullName") {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

    // Email - lowercase only
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

    // Username validation - alphabets only
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (!/^[a-zA-Z]+$/.test(formData.username)) {
      newErrors.username = "Username can only contain letters (A-Z)";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (formData.username.length > 20) {
      newErrors.username = "Username must be less than 20 characters";
    }

    // Full Name validation - alphabets and spaces only
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Full name can only contain letters and spaces";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    } else if (formData.fullName.length > 50) {
      newErrors.fullName = "Name must be less than 50 characters";
    }

    // Email validation - Gmail only
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Please use a valid Gmail address (example@gmail.com)";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (formData.password.length > 30) {
      newErrors.password = "Password must be less than 30 characters";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    navigate("/404")
  };

  const socialLogins = [
    { id: "google", label: "Google" },
    { id: "apple", label: "Apple" },
    { id: "facebook", label: "Facebook" },
  ];

  return (
    <div className="signup-page">
      {/* Background Elements */}
      <div className="signup-bg-elements">
        <div className="signup-bg-circle signup-bg-circle--1" />
        <div className="signup-bg-circle signup-bg-circle--2" />
        <div className="signup-bg-circle signup-bg-circle--3" />
        <div className="signup-bg-pattern" />
      </div>

      {/* Main Container */}
      <div className="signup-container">
        <motion.div
          className="signup-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Back Button */}
          <Link to="/" className="signup-back-btn">
            Back to Home
          </Link>

          {/* Header */}
          <div className="signup-header">
            <h1 className="signup-title">Join the Community</h1>
            <p className="signup-subtitle">
              Start your journey toward sustainable living
            </p>
          </div>

          {/* Form */}
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Username - Alphabets only */}
            <div className="signup-field">
              <label className="signup-label">
                Username <span className="signup-required">(letters only)</span>
              </label>
              <div className="signup-input-group">
                <input
                  type="text"
                  name="username"
                  className={`signup-input ${errors.username ? "error" : ""}`}
                  placeholder="JohnDoe"
                  value={formData.username}
                  onChange={handleChange}
                  maxLength="20"
                />
                <span className="signup-input-char-count">
                  {formData.username.length}/20
                </span>
              </div>
              {errors.username && (
                <span className="signup-error">{errors.username}</span>
              )}
              <div className="signup-field-hint">
                Only letters (A-Z), no spaces or special characters
              </div>
            </div>

            {/* Full Name - Alphabets and spaces */}
            <div className="signup-field">
              <label className="signup-label">
                Full Name <span className="signup-required">(letters & spaces)</span>
              </label>
              <div className="signup-input-group">
                <input
                  type="text"
                  name="fullName"
                  className={`signup-input ${errors.fullName ? "error" : ""}`}
                  placeholder="John Farmer"
                  value={formData.fullName}
                  onChange={handleChange}
                  maxLength="50"
                />
                <span className="signup-input-char-count">
                  {formData.fullName.length}/50
                </span>
              </div>
              {errors.fullName && (
                <span className="signup-error">{errors.fullName}</span>
              )}
              <div className="signup-field-hint">
                Only letters and spaces allowed
              </div>
            </div>

            {/* Email - Gmail only */}
            <div className="signup-field">
              <label className="signup-label">
                Email Address <span className="signup-required">(Gmail only)</span>
              </label>
              <div className="signup-input-group">
                <input
                  type="email"
                  name="email"
                  className={`signup-input ${errors.email ? "error" : ""}`}
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <span className="signup-error">{errors.email}</span>
              )}
              <div className="signup-field-hint signup-field-hint--gmail">
                Only Gmail addresses are accepted
              </div>
            </div>

            {/* Password */}
            <div className="signup-field">
              <label className="signup-label">
                Password <span className="signup-required">(min 6 chars)</span>
              </label>
              <div className="signup-input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`signup-input signup-input--with-toggle ${errors.password ? "error" : ""}`}
                  placeholder="Min. 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  maxLength="30"
                />
                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <span className="signup-error">{errors.password}</span>
              )}
              <div className="signup-password-strength">
                <div className="signup-password-bar">
                  <div
                    className={`signup-password-fill ${formData.password.length >= 6 ? 'strong' : ''}`}
                    style={{ width: `${Math.min((formData.password.length / 6) * 100, 100)}%` }}
                  />
                </div>
                <span className="signup-password-text">
                  {formData.password.length === 0 && "Enter a password"}
                  {formData.password.length > 0 && formData.password.length < 6 && "Weak - Add more characters"}
                  {formData.password.length >= 6 && "Strong password!"}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signup-field">
              <label className="signup-label">Confirm Password</label>
              <div className="signup-input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className={`signup-input signup-input--with-toggle ${errors.confirmPassword ? "error" : ""}`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="signup-error">{errors.confirmPassword}</span>
              )}
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <span className="signup-password-match">Passwords match</span>
              )}
            </div>

            {/* Terms & Updates */}
            <div className="signup-checkboxes">
              <label className="signup-checkbox">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="signup-link">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="signup-link">Privacy Policy</Link>
                </span>
              </label>
              {errors.agreeTerms && (
                <span className="signup-error">{errors.agreeTerms}</span>
              )}

              <label className="signup-checkbox">
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                />
                <span>
                  Receive weekly farm updates and seasonal recipes
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="signup-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="signup-spinner" />
                  Creating Account...
                </>
              ) : (
                "Create Free Account"
              )}
            </button>

            <div className="signup-divider">
              <span>Or continue with</span>
            </div>

            {/* Social Sign Up */}
            <div className="signup-social">
              {socialLogins.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  className="signup-social-btn"
                  onClick={() => navigate("/404")}
                >
                  {provider.label}
                </button>
              ))}
            </div>
          </form>

          {/* Footer */}
          <div className="signup-footer">
            <p className="signup-footer-text">
              Already have an account?{" "}
              <Link to="/login" className="signup-footer-link">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="signup-footer-bottom">
          <p className="signup-footer-bottom-text">
            By joining, you become part of a community dedicated to
            regenerative agriculture and sustainable food systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;