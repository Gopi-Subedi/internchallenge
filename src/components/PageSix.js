import React from 'react';
import { BiChevronRightCircle } from 'react-icons/bi';
import '../css/PageSix.css';
import { FiClock } from 'react-icons/fi';

function PageSix() {
  return (
    <div className="ps-container">
      <div className="ps-left">
        <span className="ps-line"></span>
        <span className="ps-title">Gallery.</span>
        <div className="ps-text">
          We have entered into a national partnership with YandC Store and you
          will find all of our incredible online content.
        </div>
        <div className="ps-gallery1">
          <div className="gallery-img1">
            <div className="gallery-content">
              <div className="gallery-time">
                <FiClock className="ps-icon-clock" size={12} />
                <span className="ps-clock-time">Feb 24, 2019</span>
              </div>
              <div className="gallery-title">
                Enter Our #WhyWeLoveOldDogs Contest
              </div>
              <div className="gallery-footer">
                <BiChevronRightCircle className="ps-icon-right" size={16} />
                <span className="ps-footer-text">VIEW GALLERY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-right">
        <div className="ps-gallery2">
          <div className="gallery-img2">
            <div className="gallery-content">
              <div className="gallery-time">
                <FiClock className="ps-icon-clock" size={12} />
                <span className="ps-clock-time">Feb 26, 2019</span>
              </div>
              <div className="gallery-title">
                Holiday gifts that celebrate old dogs!
              </div>
              <div className="gallery-footer">
                <BiChevronRightCircle className="ps-icon-right" size={16} />
                <span className="ps-footer-text">VIEW GALLERY</span>
              </div>
            </div>
          </div>
          <div className="ps-right-footer">
            <BiChevronRightCircle className="ps-icon-right" size={16} />
            <span className="ps-footer-text">VIEW MORE GALLERY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSix;
