import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./Styles/bootstrap.css";
import Game from "./Containers/Game";
import Login from "./Components/login";
import AppHeader from "./Components/app-header";
import useSessionStorage from "./hooks/useSessionStorage";
import HomePage from "./Components/homepage";
import HistoryPage from "./Components/history";
import UserProfile from "./Components/user-info";
import RegistrationForm from "./Components/user-registration";

export default function App() {
  const [isAuthenticated, toggleAuthenticationFlag] = useSessionStorage(
    "isAuthenticated"
  );

  const [user, setUser] = useSessionStorage("user");

  const handleLogout = (e) => {
    e.preventDefault();
    toggleAuthenticationFlag(false);
    setUser(null);
    window.location = window.location.origin + "/login";
  };
  if (isAuthenticated && user) {
    return (
      <div className="app-container">
        <AppHeader user={user} handleLogout={handleLogout}>
          <Link to="/home" name="home">
            Home
          </Link>
          <Link to="/history" name="history">
            History
          </Link>
          <Link to="/profile" name="user-info">
            Profile
          </Link>
          <Link to="/Game" name="user-info">
            Game
          </Link>
        </AppHeader>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route
            path="/profile"
            element={<UserProfile handleLogout={handleLogout} />}
          />
        </Routes>
      </div>
    );
  }

  return (
    <div className="app-container">
      <AppHeader>
        <Link to="/home" name="home">
          Home
        </Link>
        <Link to="/login" name="login">
          Login
        </Link>
      </AppHeader>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Game" element={<Login />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="login"
          element={
            <Login
              toggleAuthenticationFlag={toggleAuthenticationFlag}
              setUser={setUser}
            />
          }
        />
      </Routes>
    </div>
  );
}
