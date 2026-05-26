import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaLock, 
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaCar,
  FaBell,
  FaMapMarkerAlt,
  FaGoogle,
  FaPhoneAlt,
  FaUser,
  FaHeadset,
  FaRoad,
  FaWrench
} from 'react-icons/fa'

const CustomerLogin = ({ onLogin, onBackToHome, onOpenRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (onLogin) {
        onLogin(formData)
      }
    }, 1500)
  }

  const features = [
    { icon: <FaCar />, text: 'Instant Nearby Mechanic Support' },
    { icon: <FaBell />, text: '24/7 Emergency Assistance' },
    { icon: <FaMapMarkerAlt />, text: 'Live Tracking & Smart Alerts' }
  ]

  const stats = [
    { value: '2 min', label: 'average response', icon: <FaClock /> },
    { value: '500+', label: 'verified mechanics', icon: <FaShieldAlt /> },
    { value: '24/7', label: 'active support', icon: <FaHeadset /> }
  ]

  return (
    <div className="customer-login-page">
      {/* Background Elements */}
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      {/* Glowing Orbs */}
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="glow-orb orb3"></div>

      {/* Back Button */}
      <motion.button 
        onClick={onBackToHome}
        className="back-btn-customer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        ← Back to Home
      </motion.button>

      <div className="customer-auth-container">
        {/* Left Side - Branding */}
        <motion.div 
          className="customer-branding"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="brand-badge-customer">
            <FaRoad />
            <span>CUSTOMER PORTAL</span>
          </div>
          
          <h1>
            Welcome Back
            <br />
            <span className="gradient-text-blue">Driver</span>
          </h1>
          
          <p className="brand-description-customer">
            Access emergency roadside assistance, connect with nearby mechanics instantly, 
            and track live support anytime, anywhere.
          </p>
          
          <div className="feature-list-customer">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item-customer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="feature-icon-customer">{feature.icon}</div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="stats-row-customer">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card-customer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="stat-icon-customer">{stat.icon}</div>
                <div className="stat-value-customer">{stat.value}</div>
                <div className="stat-label-customer">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          className="customer-login-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="login-header-customer">
            <div className="login-icon-customer">
              <FaUser />
            </div>
            <h2>Customer Login</h2>
            <p>Secure access to your roadside assistance dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group-customer">
              <label>
                <FaEnvelope />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="driver@mechanicalbuddy.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message-customer">{errors.email}</span>}
            </div>

            <div className="input-group-customer">
              <label>
                <FaLock />
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message-customer">{errors.password}</span>}
            </div>

            <div className="options-row-customer">
              <label className="checkbox-customer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span>Remember this device</span>
              </label>
              <button type="button" className="forgot-link-customer">Forgot Password?</button>
            </div>

            <motion.button 
              type="submit" 
              className="login-btn-customer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? <span className="loader"></span> : 'Login to Dashboard'}
              {!loading && <FaArrowRight />}
            </motion.button>

            <div className="social-login-customer">
              <p>Or continue with</p>
              <div className="social-buttons-customer">
                <button type="button" className="social-btn-customer google">
                  <FaGoogle /> Google
                </button>
                <button type="button" className="social-btn-customer phone">
                  <FaPhoneAlt /> Phone Login
                </button>
              </div>
            </div>

            {/* Register Link - Opens Customer Registration Page */}
            <div className="register-link-customer">
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={onOpenRegister} className="register-now-customer">
                  Register Now
                </button>
              </p>
            </div>
          </form>

          {/* Live GPS Indicator */}
          <div className="live-gps-indicator-customer">
            <div className="gps-pulse-customer"></div>
            <span>Live Tracking Active</span>
            <FaWrench className="wrench-icon" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CustomerLogin