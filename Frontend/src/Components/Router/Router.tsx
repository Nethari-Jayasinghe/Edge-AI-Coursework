import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";
import LoginPage from "../../Pages/LogInPage/LoginPage";
import DashboardPage from "../../Pages/DashboardPage/DashboardPage";
import HistoryPage from "../../Pages/HistoryPage/HistoryPage";
import LocationPage from "../../Pages/LocationPage/LocationPage";
import SettingPage from "../../Pages/SettingPage/SettingPage";
import AccountPage from "../../Pages/AccountPage/AccountPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "location", element: <LocationPage /> },
      { path: "setting", element: <SettingPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
