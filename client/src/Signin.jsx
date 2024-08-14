import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize the navigate hook

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    } else if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email address is invalid",
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length >= 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    } else if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters long",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.get('http://localhost:5000/login/user');
        const fetchedData = response.data; 
        const matchingUser = fetchedData.find(user => user.mail === email && user.password === password );
        if (matchingUser) {
          alert("Sign in successful!");
          navigate("/Home"); // Redirect to Home page after successful sign-in
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        alert("Error during sign-in. Please try again.");
      }
    } else {
      alert("Please ensure your password is at least 8 characters long and a valid email ID is required.");
    }
  };

  return (
    <div className="die">
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="sign-in-header">
          <h1>Welcome Back</h1>
          <p>Sign in to discover beautiful handmade products!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="button-container">
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <button type="button" className="forgot-password-button">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignInPage;
