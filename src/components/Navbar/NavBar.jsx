import React from "react";
import logo from "../../images/logo.svg";
import dropDownMenu from "../../images/icon-menu.svg";
import closeMenu from "../../images/icon-menu-close.svg";
import NavLinks from "./NavLinks";
import "../../sass/navbar/navbar.scss";
import "../../sass/navbar/dropdown.scss";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  ShowDropdown = () => this.setState({ visible: true });
  HideDropdown = () => this.setState({ visible: false });

  getScreenWidth = () => {
    const { visible } = this.state;
    if (window.innerWidth <= 810) {
      return (
        <React.Fragment>
          <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="Company Logo" />
            <img
              onClick={this.ShowDropdown}
              className="navbar__open-dropdown"
              src={dropDownMenu}
              alt="Dropdown Menu"
            />

            <div className={visible ? "dropdown" : "hidden"}>
              <img
                onClick={this.HideDropdown}
                className="dropdown__close"
                src={closeMenu}
                alt="Close Dropdown Menu"
              />
              <NavLinks />
            </div>
          </nav>
          <div className={visible ? "dropdownBg-visible" : ""}></div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="Company Logo" />
            <NavLinks />
          </nav>
        </React.Fragment>
      );
    }
  };

  render() {
    return this.getScreenWidth();
  }
}

export default NavBar;
