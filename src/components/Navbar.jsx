import { NavLink } from "react-router-dom";
import { lessons } from "../data/lessons";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">D3 Learning Hub</h2>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <div className="dropdown">
          <span className="dropdown-title">Lessons ▾</span>

          <div className="dropdown-menu">
            {lessons.map((lesson) => (
              <NavLink key={lesson.path} to={lesson.path}>
                {lesson.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
