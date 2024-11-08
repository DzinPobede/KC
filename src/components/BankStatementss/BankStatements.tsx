import { useState } from "react";
import "./BankStatements.css";
import { Link, Outlet } from "react-router-dom";

function BankStatements() {
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
          <Link to={"customerpayment"} className="left-option-link">
            <p>Uplata kupca</p>
          </Link>
          <Link to={"compensations"} className="left-option-link">
            <p>Kompezacije</p>
          </Link>
          <Link to={"payments"} className="left-option-link">
            <p>Placanja</p>
          </Link>
          <Link to={"advancetocustomers"} className="left-option-link">
            <p>Avansni (Kupaca)</p>
          </Link>
          <Link to={"advancestosuppliers"} className="left-option-link">
            <p>Avansni (Dobavljacima)</p>
          </Link>
        </div>
      )}
    </>
  );
}
export default BankStatements;
