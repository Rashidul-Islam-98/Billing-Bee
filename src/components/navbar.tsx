import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-200 px-6 py-1 shadow">
       <div className="flex-shrink-0">
              <img className="block lg:hidden h-8 w-auto" src="src\assets\eurosia_logo.jpg" alt="Logo" />
              <img className="hidden lg:block h-8 w-auto" src="src\assets\eurosia_logo.jpg" alt="Logo" />
        </div>
      <h1 className="text-lg font-semibold">EuroAsia Admin</h1>
      <input
        type="text"
        placeholder="Search or type a command (Ctrl + G)"
        className="w-96 px-4 py-2 border rounded-full"
      />
    </nav>
  );
};

export default Navbar;
