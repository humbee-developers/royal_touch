import React from "react";
import Image from "next/image";
import "./blockwood_flex.css";
import icon from "@/images/Ellipse.svg";
import rectangle from "@/images/Rectangle_28.png";

const Slide_section = () => {
  return (
    <>
      <div className="section">
        <div className="icon_section">
          <div className="icons">
            <Image src={icon} alt="Icon" />
            <div className="title_section">
              <p className="heading">Same Day Doorstep Delivery</p>
              <p className="title">Within Banglore City Limits</p>
            </div>
          </div>
          <div className="icons">
            <Image src={icon} alt="Icon" />
            <div className="title_section">
              <p className="heading">Genuine Products</p>
              <p className="title">At Best Prices</p>
            </div>
          </div>
          <div className="icons">
            <Image src={icon} alt="Icon" />
            <div className="title_section">
              <p className="heading">Warranty Products</p>
              <p className="title">All Company Warranty</p>
            </div>
          </div>
          <div className="icons">
            <Image src={icon} alt="Icon" />
            <div className="title_section">
              <p className="heading">The Plywood People</p>
              <p className="title">Since 1985</p>
            </div>
          </div>
        </div>

        <div className="card_section">
          <div className="left">
            <Image src={rectangle} alt="image" />
            {/* <h1>mohit</h1> */}
          </div>
          <div className="right">
            <Image src={rectangle} alt="image" />
            {/* <h1>suman</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide_section;
