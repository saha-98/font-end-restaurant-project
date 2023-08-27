import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's world" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote img" />
          <p className="p__opensans">
            The best thing dont need to advertizement. Some-People born with the
            power of cooking. And we have that one with us
          </p>
        </div>

        <p className="p__opensans">
          Here We are . The most and nice cooking hand is looking for you to
          sever the best foods
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
