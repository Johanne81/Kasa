import React from "react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const Collapse = ({ title, description, equipments, pathname }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`collapse-${pathname === "/About" ? "about" : "fiche"}`}>
      <div className="collapse-title" onClick={handleToggle}>
        {title}
        <FaChevronUp className={`collapse-icon ${active ? "active" : ""}`} />
      </div>
      {active && (
        <div className="collapse-content">
          {pathname === "/About" ? description : equipments || description}
        </div>
      )}
    </div>
  );
};

export default Collapse;
