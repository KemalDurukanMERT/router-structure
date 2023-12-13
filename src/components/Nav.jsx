import { Link, NavLink } from "react-router-dom"
import logo from "../assets/turuncusiyah.png"

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width={"200px"} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <NavLink to="/" className='nav-link'>
                Home
            </NavLink>
            <NavLink to="/people" className='nav-link'>
                People
            </NavLink>
            <NavLink to="/paths" className='nav-link'>
                Paths
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
