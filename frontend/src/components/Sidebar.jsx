import { NavLink } from "react-router-dom";
import { FaUsers, FaChartBar, FaBars } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar

  return (
    <div className="flex bottom-0 h-screen  ">
      {/* Sidebar Container */}
      <div className={`bg-gray-800 text-white h-screen p-4 
          ${isOpen ? "w-64" : "w-30"} transition-all duration-300 ease-in-out relative`}
      >
        {/* Toggle Button */}
        <button 
          className="text-white absolute top-4 right-[-20px] bg-red-700 p-4 rounded-full hover:bg-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={20} />
        </button>

        {/* Dashboard Title */}
        <h2 className={`text-2xl font-bold mb-6 transition-opacity duration-300 ${!isOpen && "opacity-0"}`}>
          Dashboard
        </h2>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 
                ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              <FaUsers />
              {isOpen && <span>Customer Management</span>}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/stats" 
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 
                ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              <FaChartBar />
              {isOpen && <span>Customer Statistics</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
