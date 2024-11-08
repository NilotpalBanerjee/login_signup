import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './signupValidation';

function Signup() {
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h4 className="text-center mb-4">Sign Up</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="full_name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  placeholder="Enter full name"
                  onChange={handleInput}
                />
                {errors.full_name && <span className="text-danger">{errors.full_name}</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleInput}
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleInput}
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <Link to="/" className="btn btn-outline-secondary">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
