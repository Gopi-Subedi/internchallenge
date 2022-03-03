import React from 'react';
import '../css/PageSeven.css';
import { FiSquare } from 'react-icons/fi';

function PageSeven() {
  return (
    <div className="psn-container">
      <div className="psn-heading">
        <span className="psn-line"></span>
        <span className="psn-title">Client Testimonials.</span>
      </div>
      <div className="psn-body">People are saying great things about us. ️</div>
      <div className="psn-context">
        <div className="psn-left">
          <div className="psn-testimonial1">
            <div className="testimonial-comment">
              <div className="comment-heading">
                <span className="comment-symbol">”</span>
                <span className="comment-text">
                  Lorem ipsum dolor sit amet constur adipisicing elit sed
                </span>
              </div>
              <div className="comment-body">
                eiusmtempor incid sed dolore magna aliqu enim minim veniam quis
                nostrud exercittion ullamco labo ris nisi aliquip excepteur.
              </div>
            </div>
            <div className="testimonial-commentor">
              <div className="commentor-img1"></div>
              <div className="commentor-details">
                <span className="name">Lora Martin</span>
                <span className="designation">Web Developer</span>
              </div>
            </div>
            <div className="slider">
              <FiSquare className="icon1" size={16} />
              <FiSquare className="icon2" size={16} />
              <FiSquare className="icon3" size={16} />
            </div>
          </div>
        </div>
        <div className="psn-right">
          <div className="psn-testimonial1">
            <div className="testimonial-comment">
              <div className="comment-heading">
                <span className="comment-symbol">”</span>
                <span className="comment-text">
                  Lorem ipsum dolor sit amet constur adipisicing elit sed
                </span>
              </div>
              <div className="comment-body">
                eiusmtempor incid sed dolore magna aliqu enim minim veniam quis
                nostrud exercittion ullamco labo ris nisi aliquip excepteur.
              </div>
            </div>
            <div className="testimonial-commentor">
              <div className="commentor-img2"></div>
              <div className="commentor-details">
                <span className="name">Sara Martin</span>
                <span className="designation">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSeven;
