import React from 'react';
import './layouts.css';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const DashboardLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-layout">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
