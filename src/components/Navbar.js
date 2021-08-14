import React from "react";
import Logo from "../assets/img/camp404.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="navbar navbar-expand bg-dark">
        <div className="container">
          <ul className="nav">
            <img src={Logo} alt="" style={{ height: "40px" }} />
            <li>
              <Link to="/" className="nav-link">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/manajemen-buku" className="nav-link">
                Manajemen Buku
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
