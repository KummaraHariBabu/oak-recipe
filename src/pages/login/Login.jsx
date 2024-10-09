import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("form submitted");
    setName(""); // Clears the input field after submission
    setEmail("");
  };

  return (
    <div className="login-wrapper">
      <form className="form-wrapper" onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
