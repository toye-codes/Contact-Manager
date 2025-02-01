import { Menu, X } from "lucide-react";

const HamburgerMenu = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="text-white p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-all">
      {isSidebarOpen ? <X size={30} /> : <Menu size={30} />}
    </button>
  );
};

export default HamburgerMenu;
