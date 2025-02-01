import "./index.css";
import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Sidebar/SideBar";
import DisplayedContact from "./Components/DisplayedContact/DisplayedContact";
import HamburgerMenu from "./Components/Sidebar/Responsiveness/HamburgerMenu";
import useResponsive from "./Components/Sidebar/Responsiveness/Resposive";

const App = () => {
  const { isSidebarOpen, setIsSidebarOpen, isMobile } = useResponsive();

  return (
    <section className="text-3xl dark:bg-gray-800 min-h-screen">
      <header className="space-y-5 flex justify-between items-center p-4 bg-blue-900">
        <Navbar />
        {isMobile && (
          <HamburgerMenu
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </header>

      {/* Overlay when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <section className="md:grid lg:grid-cols-[5fr_8fr_6fr] space-x-1 text-white rounded-xl w-full relative">
        {(!isMobile || isSidebarOpen) && (
          <div className="relative z-20">
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
        )}

        <div className="h-screen overflow-y-auto scrollbar-hide p-4">
          <DisplayedContact />
        </div>
      </section>
    </section>
  );
};

export default App;