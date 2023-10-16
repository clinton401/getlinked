import React, {useState} from 'react'
import navcss from './Navbar.module.css'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion } from "framer-motion";
function Navbar() {
  const navigate = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
     setMenuOpen(!menuOpen);
   };
  return (
    <header id="header">
      <nav className={navcss.desktop}>
        <nav>
          <Link to="/" className="get" id="get">
            get<span>linked</span>
          </Link>
        </nav>
        <nav>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.3,
                // color: "#f8e112",
                // originX: 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink activeclassname="active" to="timeline">
                Timeline
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
                // color: "#f8e112",
                // originX: 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink activeclassname="active" to="overview">
                Overview
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
                // color: "#f8e112",
                // originX: 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink activeclassname="active" to="faq">
                FAQs
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
                // color: "#f8e112",
                // originX: 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink activeclassname="active" to="contact">
                Contact
              </NavLink>
            </motion.li>
          </ul>
          <button onClick={() => navigate("register")}>
            <span>Register</span>
          </button>
        </nav>
      </nav>
      <nav className={navcss.mobile}>
        <Link to="/" className={navcss.glink}>
          get<span>linked</span>
        </Link>
        <div className={`stairs-hamburger-menu ${menuOpen ? "open" : ""}`}>
          <div className="hamburger-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`menu-overlay ${menuOpen ? "show" : ""}`}
            onClick={toggleMenu}
          ></div>
          <nav className={`menu ${menuOpen ? "open" : ""}`}>
            <Link to="/" id="bar-home" onClick={toggleMenu}>
              get<span>linked</span>
            </Link>
            <ul>
              <li id="nlinks">
                <NavLink activeclassname="active" to="/timeline" onClick={toggleMenu}>
                  Timeline
                </NavLink>
              </li>
              <li id="nlinks">
                <NavLink
                  activeclassname="active"
                  to="/overview"
                  onClick={toggleMenu}
                >
                  Overview
                </NavLink>
              </li>
              <li id="nlinks">
                <NavLink
                  activeclassname="active"
                  to="faq"
                  onClick={toggleMenu}
                >
                  FAQs
                </NavLink>
              </li>
              <li id="nlinks">
                <NavLink
                  activeclassname="active"
                  to="contact"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              onClick={() => {
                navigate("register");
                toggleMenu();
              }}
              id="mobile-btn"
            >
              <span>Register</span>
            </button>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
