import React from "react";
import SidebarCard from "./SidebarCard";
import SyncSources from "./SyncSources";
import Button from "../../Utility/Button";
import { Settings, User, X } from "lucide-react";
import useResponsive from "./Responsiveness/Resposive";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { isMobile } = useResponsive();

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white p-4 shadow-lg transition-transform transform overflow-y-auto scrollbar-hide
        ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 sm:w-64`}>
      <div className="flex gap-7 justify-between items-center">
        <div className="mt-auto mb-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-lg transition-all">
            <p className="flex flex-cols gap-5 items-center text-white text-base md:text-xl font-semibold">
              <span>
                <User size={24} />
              </span>
              Add Contact
            </p>
          </Button>
        </div>

        {/* Close Sidebar Button */}
        <button
          className="bg-blue-800 rounded-full p-3 text-white"
          onClick={() => setIsSidebarOpen(false)}>
          <X size={30} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        <SidebarCard />
        <div className="mt-5 mb-5 w-full">
          <SyncSources />
        </div>
      </div>

      {/* Mobile Extras: Profile & Settings */}
      {isMobile && (
        <div className="mt-5 space-y-3 border-t border-gray-700 pt-3">
          <button className="flex items-center space-x-3 w-full p-2 bg-gray-800 rounded-lg">
            <User size={20} /> <span>Profile</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-2 bg-gray-800 rounded-lg">
            <Settings size={20} /> <span>Settings</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
