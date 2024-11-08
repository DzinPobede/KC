import { useState } from "react";
import "./SalesOrder.css";
import { Link } from "react-router-dom";
function SalesOrder() {

  const [isVisible, setIsVisible] = useState(true);
  function hideClick() {
    setIsVisible(!isVisible);
  }
  
  return (
    <>
      <div onClick={hideClick}>
        <img className="button-icon" src="../../public/arrow.png" alt="" />
      </div>
      {isVisible && (
        <div className={"left-option"}>
          <Link to={"demands"} className="left-option-link">
            <p>Trebovanja</p>
          </Link>
          <Link to={"routes"} className="left-option-link">
            <p>Rute</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default SalesOrder;
