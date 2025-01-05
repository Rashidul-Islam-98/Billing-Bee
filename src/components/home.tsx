import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import MainContent from './maincontent';
import Dashboard from './dashboard';

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;