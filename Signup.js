import React, { useState } from "react";

function Signup() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = data;

  const containerStyle = {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  };

  const submitButtonStyle = {
    backgroundColor: "#4caf50",
    color: "white",
    cursor: "pointer",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmpassword) console.log(data);
    else console.log("password not matched");
  };

  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={submitHandler}>
        <p>Name</p>{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
          style={inputStyle}
        />
        <br />
        <p>Email</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          style={inputStyle}
        />{" "}
        <br />
        <p>Password</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          style={inputStyle}
        />{" "}
        <br />
        <p>Confirm Password</p>
        <input
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={changeHandler}
          style={inputStyle}
        />
        <br />
        <input
          type="submit"
          name="submit"
          style={submitButtonStyle}
        />
      </form>
    </div>
  );
}

export default Signup;
