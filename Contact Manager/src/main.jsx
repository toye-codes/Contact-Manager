import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Contacts from "./pages/Contacts";
import Favourites from "./pages/Favourites";
import Tags from "./pages/Tags";
import PublicEvents from "./pages/PublicEvents";
import Calendar from "./Pages/Calendar"
import UserProfile from "./Components/UserProfile"
import Settings from "./Pages/Settings";
import Notifications from "./Components/Notifications";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "contacts", element: <Contacts /> },
      { path: "favourites", element: <Favourites /> },
      { path: "tags", element: <Tags /> },
      { path: "public-events", element: <PublicEvents /> },
      { path: "calendar", element: <Calendar /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: "settings", element: <Settings /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
