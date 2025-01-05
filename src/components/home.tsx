import React, { ReactNode, useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

interface MainLayoutProps {
  children: ReactNode; // This will hold the content that changes (CreateInvoice, Dashboard, etc.)
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden transition-all duration-500 ease-in-out">
        {/* Sidebar */}
        <div
          className={`w-72 bg-white  rounded-r-2xl p-4 fixed top-0 left-0 h-full transition-all duration-300 ease-in-out transform ${
            isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 ${isSidebarVisible ? 'ml-72' : 'ml-0'} pt-12 pb-6 overflow-auto transition-all duration-500 ease-in-out`}
          style={{ paddingTop: isSidebarVisible ? '3rem' : 'calc(3rem + 10px)' }}
        >
          <div className="max-w-7xl mx-auto bg-gray-300 rounded-lg shadow-md mt-6 pt-3 pb-3 px-6">
            {/* Add 12px padding around the main content */}
            <div className="p-3 bg-white shadow-md rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
