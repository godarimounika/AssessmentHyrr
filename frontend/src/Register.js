
import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";




function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required.';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address.';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required.';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.agreeTerms) {
      validationErrors.agreeTerms = 'You must agree to the terms and conditions.';
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const sendWelcomeEmail = () => {
    // Simulate sending a welcome email (without using a library)
    console.log(`Sending welcome email to ${formData.email}`);
    console.log('Thank you for signing up!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Simulate server request
        const response = await axios.post('http://localhost:3001/api/auth/signup', formData);
              // Extract the JWT token from the server response
      const { token, message } = response.data;

      // Store the token securely (e.g., in localStorage)
      localStorage.setItem('accessToken', token);

        setSuccessMessage(message);

        setTimeout(() => {
          navigate('/posts');
        }, 2000);
      } catch (error) {
        setShowErrorAlert(true);
        setErrors({ general: 'Failed to sign up. Please try again.' });
      }
    }
  };


  

  return (

  

  <div className="container mx-auto mt-10 p-5 bg-gray-200 rounded shadow">
  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
    <h1 className="text-3xl font-semibold mb-5">Signup Form</h1>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username:
      </label>
      <input
        type="text"
        className={`border rounded w-full px-3 py-2 ${
          errors.username ? "border-red-500" : "border-gray-300"
        }`}
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      {errors.username && (
        <p className="text-red-500 text-sm mt-1">{errors.username}</p>
      )}
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email:
      </label>
      <input
        type="email"
        className={`border rounded w-full px-3 py-2 ${
          errors.email ? "border-red-500" : "border-gray-300"
        }`}
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>

   

<div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className={`border rounded w-full px-3 py-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Confirm Password:
      </label>
      <input
        type="password"
        className={`border rounded w-full px-3 py-2 ${
          errors.confirmPassword ? "border-red-500" : "border-gray-300"
        }`}
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mt-1">
          {errors.confirmPassword}
        </p>
      )}
    </div>

    <div className="mb-4">
      <label className="flex items-center text-gray-700 text-sm font-bold">
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Agree to terms and conditions</span>
      </label>
      {errors.agreeTerms && (
        <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>
      )}
    </div>

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
    >
      Sign Up
    </button>

    {errors.general && (
      <p className="text-red-500 text-sm mt-3">{errors.general}</p>
    )}
    {showErrorAlert && (
      <div className="text-red-500 text-sm mt-3">
        Failed to sign up. Please try again.
      </div>
    )}
    {successMessage && (
      <p className="text-green-500 text-sm mt-3">{successMessage}</p>
    )}
  </form>
</div>
  )
}

export default Register


