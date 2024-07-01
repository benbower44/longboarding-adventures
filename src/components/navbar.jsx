import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="whole-page">
      <ul className="navbar">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="adventures">
            Adventures
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="suggestions">
            Suggestions
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="chat">
            Chat
          </Link>
        </li>
        {localStorage.getItem("longboarder") ? (
          <li className="navbar-item">
            <Link
              className="navbar-link"
              to=""
              onClick={() => {
                localStorage.removeItem("longboarder");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
