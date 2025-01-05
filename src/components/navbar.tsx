import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center bg-gray-200 px-6 py-2 shadow-lg fixed top-0 w-full z-10 transition-all duration-300 ease-in-out">
      {/* Container for Toggle Button and Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200"
        >
          ☰
        </button>
        <div className="flex-shrink-0" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
          <img
            className="h-8 w-auto transition-all duration-200 transform hover:scale-105"
            src="src/assets/eurosia_logo.jpg"
            alt="Logo"
          />
        </div>
      </div>

      <h1 className="text-lg font-semibold text-gray-800 hover:text-gray-900 cursor-pointer transition-colors duration-300">
        EuroAsia Admin
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search or type a command (Ctrl + G)"
        className="w-96 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
    </nav>
  );
};

export default Navbar;
