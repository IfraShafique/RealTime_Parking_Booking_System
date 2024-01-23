import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logout() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_CONNECTION_URI}/logout`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log("Logout Successful");
        localStorage.removeItem('jwt');
        navigate('/');
      } else {
        console.error("Logout failed with status:", response.status);
        setError("Failed to logout. Please try again later.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setError("Failed to logout. Please try again later.");
    }
  }, [navigate]);

  useEffect(() => {
    const handleLogout = async () => {
      await logout();
    };

    handleLogout();
  }, [logout]);

  return (
    <div>
      {error && <p>{error}</p>}
    </div>
  );
}
