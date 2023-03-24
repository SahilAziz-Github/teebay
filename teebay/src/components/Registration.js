import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle registration functionality here
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Registration</h2>
      <RegistrationForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
}

export default Registration;
