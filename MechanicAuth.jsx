import { useState } from 'react'
import CustomerLogin from './CustomerLogin'
import MechanicRegister from './MechanicRegisterPage'

const MechanicAuth = ({ onLoginSuccess, onBackToHome }) => {
  const [showLogin, setShowLogin] = useState(true)

  const handleLogin = (userData) => {
    console.log('Login successful:', userData)
    if (onLoginSuccess) {
      onLoginSuccess()
    }
  }

  const handleRegister = (userData) => {
    console.log('Registration:', userData)
    alert('Registration successful! Please login to continue.')
    setShowLogin(true)
  }

  return (
    <>
      {showLogin ? (
        <CustomerLogin 
          onSwitchToRegister={() => setShowLogin(false)}
          onLogin={handleLogin}
          onBackToHome={onBackToHome}
        />
      ) : (
        <MechanicRegister 
          onSwitchToLogin={() => setShowLogin(true)}
          onRegister={handleRegister}
        />
      )}
    </>
  )
}

export default MechanicAuth
