import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/'); // Navigate to login on logout
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow">
        <div className="card-body text-center">
          <h3 className="card-title mb-3 text-primary">Welcome to the Home Page!</h3>
          <p className="card-text mb-4">This is a simple React application with a Home page.</p>
          <button type="button" className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
