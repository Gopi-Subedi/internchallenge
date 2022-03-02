import React from 'react';
import '../css/PageFour.css';
import { BiChevronRightCircle } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';

function PageFour() {
  return (
    <div className="pf-container">
      <div className="pf-left">
        <span className="pf-line"></span>
        <span className="pf-title">Recent NEWS.</span>
        <div className="pf-text">
          More than 22,500 dogs live on the streets of Kathmandu, Nepal, and
          many suffer from starvation, infected open sores, mange, and other
          injuries and illnesses.
        </div>
        <div className="pf-news">
          <div className="pf-news1">
            <div className="news-context">
              <div className="news-time">
                <FiClock className="pf-icon-clock" size={12} />
                <span className="pf-clock-time">Feb 24, 2019</span>
              </div>
              <div className="news-title-left">
                Five stray dogs found dead in Serampore; some lying ill
              </div>
              <div className="news-footer">
                <BiChevronRightCircle className="pf-icon-right" size={16} />
                <span className="pf-footer-text">READ MORE</span>
              </div>
            </div>
          </div>
          <div className="pf-left-footer">
            <BiChevronRightCircle className="pf-icon-right" size={16} />
            <span className="pf-footer-text">VIEW MORE NEWS</span>
          </div>
        </div>
      </div>
      <div className="pf-right">
        <div className="pf-news2">
          <div className="news-context">
            <div className="news-time">
              <FiClock className="pf-icon-clock" size={12} />
              <span className="pf-clock-time">Feb 26, 2019</span>
            </div>
            <div className="news-title-right">
              Thousands of street dogs in Mauritius visit paradise KTM’s first
              ever spay/neuter clinic as
            </div>
            <div className="news-footer">
              <BiChevronRightCircle className="pf-icon-right" size={16} />
              <span className="pf-footer-text">READ MORE</span>
            </div>
          </div>
        </div>
        <div className="pf-news3">
          <div className="news-context">
            <div className="news-time">
              <FiClock className="pf-icon-clock" size={12} />
              <span className="pf-clock-time">Feb 26, 2019</span>
            </div>
            <div className="news-title-right">
              Thousands of street dogs in Mauritius visit paradise KTM’s first
              ever spay/neuter clinic as
            </div>
            <div className="news-footer">
              <BiChevronRightCircle className="pf-icon-right" size={16} />
              <span className="pf-footer-text">READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFour;
