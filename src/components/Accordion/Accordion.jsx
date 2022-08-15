import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import "./Accordion.css";

const Accordion = ({ title, content, direction }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} />
      </div>
      {isActive && <div className={`accordion-content ${direction === "vertical"? "vertical" : ""}`} >{content}</div>}
    </div>
  );
};

export default Accordion;
