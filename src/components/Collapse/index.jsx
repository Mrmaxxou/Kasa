import React, {useState} from "react";

import '../../utils/style/collapse.css';

import IconCollapse from '../../assets/arrow_back_ios.svg'



function Collapse({ title, text, collapseClass }) {
    const [collapsed, setCollapsed] = useState(false);
  
    function toggleCollapse() {
      setCollapsed(!collapsed);
    }
  
    return (
      <section className={collapseClass}>
        <div className="collapse-icontitle">
          <h3 className="collapse-title">{title}</h3>
          <img
            className={`collapse-icons ${collapsed ? 'collapsed' : ''}`}
            src={IconCollapse}
            alt="Icone déplit-replis"
            onClick={toggleCollapse}
          />
        </div>
        <div className={`collapse-backgroundtext collapse__content ${collapsed ? 'collapse__content--expanded' : ''}`}>
          <div className="collapse-text">{text}</div>
        </div>
      </section>
    );
  }

export default Collapse;