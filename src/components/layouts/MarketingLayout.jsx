import React from 'react';
import './layouts.css';
import { Outlet } from 'react-router-dom';

const MarketingLayout = () => {
  return (
    <div className="marketing-layout">
      <Outlet />
    </div>
  );
};

export default MarketingLayout;
