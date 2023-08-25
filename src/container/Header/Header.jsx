import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title=" Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Sit tell us what is more good for you We will always do our service best
        to provibe you.
      </p>
      <button type="button" className="custom__button">
        {" "}
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img ">
      <img src={images.welcome} alt="welcome img" />
    </div>
  </div>
);

export default Header;
