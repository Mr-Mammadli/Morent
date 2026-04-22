
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import Notification from "../../assets/icons/notification.svg";
import heart from "../../assets/icons/heart.svg";
import Settings from "../../assets/icons/Settings.svg";
import Profil from "../../assets/icons/Profil.svg";
import menu from "../../assets/icons/menu.svg";

function Navbar({ onFilterClick, search, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={menu} alt="menu" />
      </button>

      <Link className="logo" to="/">
        <div>MORENT</div>
      </Link>

      <SearchBar
        onFilterClick={onFilterClick}
        search={search}
        onSearch={onSearch}
      />

      <div className="rightIcons">
        <Link to="/favorites">
          <div className="iconBox">
            <img src={heart} alt="heart" />
          </div>
        </Link>

        <Link to="/cars">
          <div className="iconBox">
            <img src={Notification} alt="notification" />
          </div>
        </Link>

        <Link to="/dashboard">
          <div className="iconBox">
            <img src={Settings} alt="settings" />
          </div>
        </Link>
        <div className="iconBox profile">
          <img src={Profil} alt="profile" />
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "navbar__mobile-link" + (isActive ? " active" : "")
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              "navbar__mobile-link" + (isActive ? " active" : "")
            }
            onClick={() => setMenuOpen(false)}
          >
            Cars
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              "navbar__mobile-link" + (isActive ? " active" : "")
            }
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              "navbar__mobile-link" + (isActive ? " active" : "")
            }
            onClick={() => setMenuOpen(false)}
          >
            Booking
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
