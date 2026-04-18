import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    college: '',
    email: '',
    password: '',
    address: '',
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    let newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username !== formData.username.toLowerCase()) {
      newErrors.username = 'Username must be lowercase only'
    }

    // College validation
    if (!formData.college.trim()) {
      newErrors.college = 'College is required'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for the field being typed
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form Submitted Successfully:', formData)
      // Optionally reset form or show success message
    }
  }

  return (
    <div className="container">
      <div className="registration-card">
        <h1 className="title">Student<br />Registration Form</h1>
        
        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name" 
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username" 
            />
            {errors.username && <p className="error-msg">{errors.username}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="college">College</label>
            <input 
              type="text" 
              id="college" 
              name="college" 
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter college" 
            />
            {errors.college && <p className="error-msg">{errors.college}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email" 
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password" 
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address" 
            />
            {errors.address && <p className="error-msg">{errors.address}</p>}
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
