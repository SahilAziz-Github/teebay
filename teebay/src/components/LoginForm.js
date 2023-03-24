import React from "react";
import { useNavigate } from "react-router-dom";


function LoginForm(props) {

    const Navigate = useNavigate()

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.email}
        onChange={props.handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={props.password}
        onChange={props.handlePasswordChange}
      />
      <button onClick={() => Navigate("/HomePage")}>Login</button>
    </form>
  );
}

export default LoginForm;
