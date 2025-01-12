import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAccountCircle,
  MdOutlineSettings,
  MdLock,
  MdNotificationsActive,
  MdLogout,
} from "react-icons/md";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileClicked((prev) => !prev);
  };

  const logOut = () => {
    toggleProfile();
    navigate("/");
  }

  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-200 px-6 py-2 shadow-lg fixed top-0 w-full z-10 transition-all duration-300 ease-in-out">
        {/* Container for Toggle Button and Logo */}
        <div className="flex items-center space-x-4 w-60">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200"
          >
            ☰
          </button>
          <div
            className="flex-shrink-0"
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            <img
              className="h-8 w-auto transition-all duration-200 transform hover:scale-105"
              src="src/assets/eurosia_logo.jpg"
              alt="Logo"
            />
          </div>
        </div>

        {/* <h1 className="text-lg font-semibold text-gray-800 hover:text-gray-900 cursor-pointer transition-colors duration-300">
        EuroAsia Admin
      </h1> */}

        {/* Search Input */}
        <div className="flex flex-row justify-between w-full">
          <input
            type="text"
            placeholder="Search or type a command (Ctrl + G)"
            className="w-96 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <img
            src="src/assets/profile.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full"
            onClick={toggleProfile}
          />
        </div>
      </nav>
      {isProfileClicked && (
        <div className="w-60 bg-white rounded-md shadow-md absolute top-14 right-4 z-20">
          <div className="flex flex-col p-4">
            <div className="flex flex-row justify-start items-center space-x-2 w-full rounded-md p-2 hover:bg-slate-100">
              <MdAccountCircle />
              <span>Account</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-2 w-full rounded-md p-2 hover:bg-slate-100">
              <MdOutlineSettings />
              <span>Settings</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-2 w-full rounded-md p-2 hover:bg-slate-100">
              <MdLock />
              <span>Privacy</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-2 w-full rounded-md p-2 hover:bg-slate-100">
              <MdNotificationsActive />
              <span>Notification</span>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2 w-full rounded-md p-2 text-red-500 hover:bg-red-200" onClick={logOut}>
            <MdLogout />
            <span>Log Out</span>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
