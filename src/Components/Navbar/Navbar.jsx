import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logg.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", link: "hero" },
  { name: "Achievements", link: "brands" },
  { name: "Services", link: "services" },
  { name: "About Us", link: "about-container" },
  { name: "Reviews", link: "testimonial-page" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const isLoanPage = pathname === "/loan";

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const closeMenu = () => setMobileMenu(false);

  const renderNavLinks = () => {
    return navItems.map((item, i) => (
      <li key={i}>
        {pathname === "/" ? (
          <ScrollLink
            to={item.link}
            smooth={true}
            offset={-85}
            duration={500}
            onClick={closeMenu}
          >
            {item.name}
          </ScrollLink>
        ) : (
          <RouterLink to="/" onClick={closeMenu} className="loan-nav">
            {item.name}
          </RouterLink>
        )}
      </li>
    ));
  };

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      {isLoanPage ? (
        <RouterLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </RouterLink>
      ) : (
        <ScrollLink to="hero" smooth={true} offset={-100} duration={500}>
          <img src={logo} alt="Logo" className="logo" />
        </ScrollLink>
      )}

      <ul className={`nav-links ${mobileMenu ? "show-menu" : ""}`}>
        {renderNavLinks()}

        <li>
          <a href="https://digiwhiff.com/" className="loan-nav">
          digiwhiff
          </a>
        </li>

        <li>
          {isLoanPage ? (
            <RouterLink to="/" className="btn">
              Contact us
            </RouterLink>
          ) : (
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn"
              onClick={closeMenu}
            >
              Contact us
            </ScrollLink>
          )}
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        {mobileMenu ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
