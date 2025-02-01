import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Bell, Settings, User } from "lucide-react";

const Navbar = () => {
  // List of the navigation tags
  const linkList = [
    { id: 1, link: "/contacts", navTitle: "Contacts" },
    { id: 2, link: "/favourites", navTitle: "Favourites" },
    { id: 3, link: "/tags", navTitle: "Tags" },
    { id: 4, link: "/public-events", navTitle: "Public Events" },
    { id: 5, link: "/calendar", navTitle: "Calendar" },
  ];

  // Mapped list to display all tags
  const NavList = linkList.map(({ id, link, navTitle }) => (
    <div key={id}>
      <Link
        to={link}
        className="text-gray-800 hover:bg-blue-500 hover:text-gray-50 hover:px-3 hover:py-2 rounded-full transition-all duration-200">
        {navTitle}
      </Link>
    </div>
  ));

  // List for profile, notification and settings.
  const profileList = [
    {
      id: "notifications",
      link: "/notifications",
      icon: <Bell className="md:w-8 md:h-8 w-4 h-4" />,
    },
    {
      id: "settings",
      link: "/settings",
      icon: <Settings className="md:w-8 md:h-8 w-4 h-4" />,
    },
    {
      id: "userprofile",
      link: "/useprofile",
      icon: <User className="md:w-8 md:h-8 w-4 h-4" />,
    },
  ];

  // Mapped profile list data
  const profile = profileList.map(({ id, link, icon }) => (
    <div key={id}>
      <div className="bg-blue-700 p-1 rounded-full text-white hover:bg-blue-500 hover:text-white transition-all duration-150">
        <Link to={link}> {icon} </Link>
      </div>
    </div>
  ));

  return (
    <div className="flex justify-between py-3 px-4 ">
      <div className="flex text-lg items-center gap-2">
        <img
          src={logo}
          alt="contact manager"
          className="w-8 h-8 rounded-full"
        />
        <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text font-bold italic">
          Contact Hero
        </span>
      </div>
      <div className=" hidden md:flex text-lg gap-5">{NavList}</div>
      <div className="hidden md:flex space-x-4">{profile}</div>
    </div>
  );
};

export default Navbar;
