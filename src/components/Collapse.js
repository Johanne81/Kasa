import React from "react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const Collapse = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={handleToggle}>
        {title}
        <FaChevronUp className={`collapse-icon ${active ? "active" : ""}`} />
      </div>
      {active && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
