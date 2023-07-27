import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <Link to="/">
          <h1 className="logo">
            Blo<span>G</span>y
          </h1>
        </Link>
        <div className="links">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "#34ad72" : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            style={({ isActive }) => {
              return {
                pointerEvents: isActive ? "none" : "",
                opacity: isActive ? "0.5" : "",
              };
            }}
            className={"button"}
          >
            New Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
