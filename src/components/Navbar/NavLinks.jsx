import React from "react";
import "../../sass/navbar/navLinks.scss";

function NavLinks() {
  return (
    <React.Fragment>
      <ul className="navList">
        <li className="navList__link">
          <button className="navList__btn">Home</button>
        </li>
        <li className="navList__link">
          <button className="navList__btn">New</button>
        </li>
        <li className="navList__link">
          <button className="navList__btn">Popular</button>
        </li>
        <li className="navList__link">
          <button className="navList__btn">Trending</button>
        </li>
        <li className="navList__link">
          <button className="navList__btn">Catagories</button>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavLinks;
