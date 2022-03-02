import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from 'react';
import '../css/PageFive.css';

function PageFive() {
  return (
    <div className="pfi-container">
      <div className="pfi-heading">
        <span className="pfi-line"></span>
        <span className="pfi-title">Our Team.</span>
      </div>
      <div className="pfi-body">
        We are not a team because we work together. We are a team because we
        respect, trust and care for each other.
      </div>
      <div className="team-members">
        <div className="tm-left">
          <div className="ltm-img"></div>
          <div className="tm-name">John Filmr Doe</div>
          <div className="tm-desc">
            If you are going to use a passage of you sure there isn't middle of
            text.
          </div>
          <div className="tm-links">
            <FaInstagram className="tm-insta-icon" size={10} />
            <FaLinkedin className="tm-link-icon" size={10} />
            <FaTwitter className="tm-link-icon" size={10} />
          </div>
        </div>
        <div className="tm-middle">
          <div className="mtm-img"></div>
          <div className="tm-name">Lora Martin</div>
          <div className="tm-desc">
            If you are going to use a passage of you sure there isn't middle of
            text.
          </div>
          <div className="tm-links">
            <FaInstagram className="tm-insta-icon" size={10} />
            <FaLinkedin className="tm-link-icon" size={10} />
            <FaTwitter className="tm-link-icon" size={10} />
          </div>
        </div>
        <div className="tm-right">
          <div className="rtm-img"></div>
          <div className="tm-name">Lora Martin</div>
          <div className="tm-desc">
            If you are going to use a passage of you sure there isn't middle of
            text.
          </div>
          <div className="tm-links">
            <FaInstagram className="tm-insta-icon" size={10} />
            <FaLinkedin className="tm-link-icon" size={10} />
            <FaTwitter className="tm-link-icon" size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFive;
