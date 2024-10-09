import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("form submitted");
    const storedUser = localStorage.getItem("user");
    const existingUser = storedUser ? JSON.parse(storedUser) : [];
    const newUser = { name, email };
    const updatedUser = [...existingUser, newUser];
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setName(""); // Clears the input field after submission
    console.log(localStorage.getItem("user"))
    setEmail("");
  };

  return (
    <div className="login-wrapper">
      <div className="form-wrapper">
        <form onSubmit={submitHandler}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
