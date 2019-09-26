import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const NavbarItem = styled.span`
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
`;

export function Header({ isAuth, removeAuth }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <NavbarItem className="navbar-item">
            <img src="/favicon.png" width="112" height="58" alt="" />
          </NavbarItem>
        </Link>

        <span
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          role="button"
          className={`navbar-burger burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Useful vocabulary</span>

            <div className="navbar-dropdown">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <NavbarItem className="navbar-item">Sports</NavbarItem>
              </Link>
              <Link to="/actions" onClick={() => setIsMenuOpen(false)}>
                <NavbarItem className="navbar-item">Actions</NavbarItem>
              </Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">General vocabulary review</span>

            <div className="navbar-dropdown">
              <Link to="/fruits" onClick={() => setIsMenuOpen(false)}>
                <NavbarItem className="navbar-item">Fruits</NavbarItem>
              </Link>
              <Link to="/color" onClick={() => setIsMenuOpen(false)}>
                <NavbarItem className="navbar-item">Color</NavbarItem>
              </Link>
              <Link to="/animals" onClick={() => setIsMenuOpen(false)}>
                <NavbarItem className="navbar-item">Animals</NavbarItem>
              </Link>
            </div>
          </div>

          {isAuth && (
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">
                {window.localStorage.getItem("nickname")}
              </span>

              <div className="navbar-dropdown">
                <NavbarItem className="navbar-item" onClick={removeAuth}>
                  Sign out
                </NavbarItem>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
