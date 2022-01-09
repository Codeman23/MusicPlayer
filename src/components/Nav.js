import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import logo from "./../logo.svg"; //

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <button
        className="navigation__btn"
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
