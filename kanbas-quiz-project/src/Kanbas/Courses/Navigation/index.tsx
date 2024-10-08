import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Grades",
    "Quizzes",
    "Assignments",
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;
