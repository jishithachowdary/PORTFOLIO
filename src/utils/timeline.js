import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h6 className="vertical-timeline-element-subtitle">To be continued...</h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="April 2021 - present"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">System Developer</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Capgemini,Banglore</h6>
                <p>Full Stack Developer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="December 2019 - September 2020"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">System Engineer</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Infosys Limited</h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2015-2019"
                dateClassName="mx-lg-2"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} className="timeline-grad-icon" />}
            >
                <h3 className="vertical-timeline-element-title mb-4">Bachelore Of Engineering</h3>
                <p>Electronics and Communication</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline;
