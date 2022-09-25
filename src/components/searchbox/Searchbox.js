import React from "react";
import "./Searchbox.css";
import { MdLocationOn } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbox = () => {
  return (
    <div className="container">
      <div className="location-icon">
        <MdLocationOn />
      </div>
      <input type="text" className="search-tag" placeholder="Enter City Here" />
      <div className="search-icon">
        <BiSearchAlt2 />
      </div>
    </div>
  );
};

export default Searchbox;
