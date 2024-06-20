// import React from "react";
import { useState } from "react";
import "../assets/style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-warning">{error && error}</div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success m w-100 rounded-0 mb-2">
            Log in
          </button>
          <div className="mb-1 form-check">
            <input
              type="checkbox"
              name="tick"
              id="tick"
              className="me-2 form-check-input"
            />
            <label htmlFor="checkbox" className="form-check-label">
              <strong>You agree with our terms & conditions</strong>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
