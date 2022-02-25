import React from "react";
import "../css/Splashpage.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCircle,
} from "react-icons/fi";
import { BiChevronRightCircle } from "react-icons/bi";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
function Splashpage() {
  return (
    <div className="splashpage-container">
      <div className="splashpage-right-block">
        <div className="splashpage-context">
          <div className="right-title">
            Featured Posts
            <div className="icon-navigate">
              <FiChevronLeft className="icon-left" />
              <FiChevronRight className="icon-right" />
            </div>
          </div>
          <div className="right-body">
            <div className="body-header">
              Researchers explore impact of obesity on dog’s health
            </div>
            <div className="body-date">
              <FiClock className="icon-clock" size={12} />
              <span className="clock-time">Aug 31, 2014</span>
            </div>
            <div className="body-text">
              If you thought that obesity affects only humans, you may be wrong.
              It can also shorten the lives of your canine friends, finds
              research. The research, from the University of Liverpool in the
              UK, reveals
            </div>
            <div className="body-footer">
              <BiChevronRightCircle className="icon-circle-right" size={18} />
              <div className="body-footer-text">READ MORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="splashpage-footer-links">
        <div className="splashpage-footer-text">Follow us on:</div>
        <div className="splashpage-links">
          <FaTwitter className="splashpage-link-icon" size={22} />
          <FaLinkedin className="splashpage-link-icon" size={22} />
          <FaFacebookSquare className="splashpage-link-icon" size={22} />
          <FaYoutube className="splashpage-link-icon" size={22} />
        </div>
      </div>
      <div className="splashpage-slider">
        <FiCircle size={10} className="splashpage-slider-icon" />
        <FiCircle size={10} className="splashpage-slider-icon" />
        <FiCircle size={10} className="splashpage-slider-icon" />
        <FiCircle size={10} className="splashpage-slider-icon" />
      </div>
    </div>
  );
}

export default Splashpage;
