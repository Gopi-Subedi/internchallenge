import React from "react";
import "../css/Navbar.css";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-title">Saltpeter</div>
      <div className="navbar-items">
        <div className="item-home">Home</div>
        <div className="item-aboutus">About Us +</div>
        <div className="item-newsandevents">News and Events +</div>
        <div className="item-gallery">Gallery</div>
        <div className="item-resources">Resources +</div>
        <div className="item-projects">Projects</div>
        <div className="item-contacts">Contacts</div>
        <BiSearch className="item-search" />
      </div>
    </div>
  );
}

export default Navbar;
