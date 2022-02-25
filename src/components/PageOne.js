import React from "react";
import "../css/PageOne.css";
import { BiChevronRightCircle } from "react-icons/bi";

function PageOne() {
  return (
    <div className="pageone-container">
      <div className="pageone-left">
        <div className="po-left-heading">
          <span className="po-left-line"></span>
          <span className="po-left-title">Meet the Dogs</span>
        </div>
        <div className="po-left-body">
          Meet some of the dogs helped by The Grey Muzzle Organization. We
          provide grants and other funding to pay expenses, such as medical
          care, so the wonderful organizations that give these dogs a second
          chance can focus on their care.
        </div>
        <div className="po-left-footer">
          <BiChevronRightCircle className="po-icon-right" size={18} />
          <span className="po-footer-text">READ MORE</span>
        </div>
      </div>
      <div className="pageone-right">
        <div div className="po-img"></div>
      </div>
    </div>
  );
}

export default PageOne;
