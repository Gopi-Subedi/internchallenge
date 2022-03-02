import React from "react";
import "../css/PageThree.css";
import { BiChevronRightCircle } from "react-icons/bi";

function PageThree() {
  return (
    <div className="pth-container">
      <div className="pth-heading">
        <span className="pth-line"></span>
        <span className="pth-title">Upcoming Events.</span>
      </div>
      <div className="pth-body">
        We have a host of wonderful events lined up for the year ahead that help
        raise funds and awareness for Street Dogs. We look forward to meeting
        you.
      </div>
      <div className="pth-events">
        <div className="pth-event1">
          <div className="event1-img">
            <div className="event-calender">
              <span className="evnt-cal-date">23</span>
              <span className="evnt-cal-month">MAR</span>
            </div>
          </div>
          <div className="event-date">Feb 23, 2019, 11:00 PM - 2:00PM</div>
          <div className="event-heading">
            Sketch Meetup Kathmandu V2 - "Unpresent"
          </div>
          <div className="event-line"></div>
          <div className="event-options">
            <span className="event-opt1">ngodistro</span>
            <span className="event-opt2">blog</span>
          </div>
        </div>

        <div className="pth-event2">
          <div className="event2-img">
            <div className="event-calender">
              <span className="evnt-cal-date">25</span>
              <span className="evnt-cal-month">FEB</span>
            </div>
          </div>
          <div className="event-date">Feb 25, 2019, 11:00 PM</div>
          <div className="event-heading">
            Simple truth about 200-day moving average
          </div>
          <div className="event-line"></div>
          <div className="event-options">
            <span className="event-opt1">Street</span>
            <span className="event-opt2">dogs</span>
          </div>
        </div>
        <div className="pth-event3">
          <div className="event3-img">
            <div className="event-calender">
              <span className="evnt-cal-date">28</span>
              <span className="evnt-cal-month">FEB</span>
            </div>
          </div>
          <div className="event-date">Feb 28, 2019, 11:00 PM</div>
          <div className="event-heading">
            Street dogs vaccinated against diseases/rabies
          </div>
          <div className="event-line"></div>
          <div className="event-options">
            <span className="event-opt1">ngodistro</span>
            <span className="event-opt2">streetdog</span>
          </div>
        </div>
      </div>
      <div className="past-events">
        <div className="past-evnt-heading">Past Events</div>
        <div className="pst-events">
          <div className="pst-evnt1">
            <div className="pst-evnt-img1"></div>
            <div className="pst-evnt-title">
              The Street Giveth and the Street Taketh Away
            </div>
          </div>
          <div className="pst-evnt2">
            <div className="pst-evnt-img2"></div>
            <div className="pst-evnt-title">The 59th Street Bridge Song</div>
          </div>
          <div className="pst-evnt3">
            <div className="pst-evnt-img3"></div>
            <div className="pst-evnt-title">Wild In The Streets</div>
          </div>
          <div className="pst-evnt4">
            <div className="pst-evnt-img4"></div>
            <div className="pst-evnt-title">Incident on 57th Street</div>
          </div>
        </div>
      </div>
      <div className="pst-footer">
        <BiChevronRightCircle className="pst-right-icon" size={18} />
        <span className="pst-footer-text">VIEW MORE PROJECTS</span>
      </div>
    </div>
  );
}

export default PageThree;
