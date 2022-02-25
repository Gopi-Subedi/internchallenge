import React from "react";
import "../css/PageTwo.css";
import { BiChevronRightCircle, BiPlus } from "react-icons/bi";
import { FiClock } from "react-icons/fi";

function PageTwo() {
  return (
    <div className="pagetwo-container">
      <div className="pt-left">
        <span className="pt-line"></span>
        <span className="pt-title">Recent Project.</span>
        <div className="pt-text">
          Meet some of the dogs helped by The Saltpeater Organization. We
          provide grants and other funding to pay expenses, such as medical
          care, so the wonderful organizations{" "}
        </div>
        <div className="pt-projects">
          <div className="pt-project1">
            <BiPlus size={40} className="icon-plus" />
          </div>
          <div className="pt-project2">
            <BiPlus size={40} className="icon-plus" />
          </div>
        </div>
      </div>
      <div className="pt-right">
        <div className="pt-project3">
          <div className="project3-heading">
            Forbes Features The Grey Muzzle Organization
          </div>
          <div className="project3-date">
            <FiClock className="pt3-icon-clock" size={12} />
            <span className="pt3-clock-time">Aug 31, 2014</span>
          </div>
          <div className="project3-body">
            We are thrilled that Forbes has highlighted The Grey Muzzle
            Organization as one of its "12 Days of Charitable Giving" nonprofits
            to consider contributing to this holiday season!
          </div>
          <div className="project3-footer">
            <BiChevronRightCircle className="pt3-icon-right" size={18} />
            <span className="pt3-footer-text">READ MORE</span>
          </div>
        </div>
        <div className="pt-project4">
          <BiPlus size={40} className="icon-plus" />
        </div>
        <div className="pt-right-footer">
          <BiChevronRightCircle className="pt-right-icon" size={18} />
          <span className="pt-footer-text">VIEW MORE PROJECTS</span>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
