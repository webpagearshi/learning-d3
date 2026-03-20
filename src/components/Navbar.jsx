import { NavLink, useLocation } from "react-router-dom";
import { lessons } from "../data/lessons";
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // Check if we're on a lessons page to keep the dropdown active
  const isLessonsActive = lessons.some(
    (lesson) => lesson.path === location.pathname,
  ); // Add "active" class to the dropdown title if we're on a lessons page
  return (
    <div className="navbar">
      <h2 className="logo">D3 Learning Hub</h2>
      {/* Navigation links */}
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <div className="dropdown">
          <NavLink
            to="/lessons"
            className={`dropdown-title ${isLessonsActive ? "active" : ""}`}
            onClick={(e) => e.preventDefault()}
          >
            Lessons ▾
          </NavLink>

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
