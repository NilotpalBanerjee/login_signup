import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './loginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email_or_mobile: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (!validationErrors.email && !validationErrors.mobile_no && !validationErrors.password) {
      axios.post('http://localhost:4000', values)
        .then((res) => {
          if (res.data === 'Success') {
            navigate('/home');
          } else {
            alert('No records found');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h4 className="text-center mb-4">Login</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email_or_mobile" className="form-label">Email address / Mobile no</label>
                <input
                  type="text"
                  className="form-control"
                  name="email_or_mobile"
                  placeholder="Enter email or mobile no"
                  value={values.email_or_mobile}
                  onChange={handleInput}
                />
                {(errors.email || errors.mobile_no) && <span className="text-danger">{errors.email || errors.mobile_no}</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="d-flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control w-75"
                    name="password"
                    placeholder="Password"
                    onChange={handleInput}
                  />
                  <button
                    type="button"
                    className="btn btn-default border btn-sm w-25"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/signup" className="btn btn-outline-secondary">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
