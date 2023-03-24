import React from "react";

function RegistrationForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={props.name}
          onChange={props.handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={props.email}
          onChange={props.handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={props.password}
          onChange={props.handlePasswordChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
