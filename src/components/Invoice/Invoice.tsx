import { useState } from "react";
import "./Invoice.css";
import { Link } from "react-router-dom";

function Invoice() {
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
          <Link to={"proformainvoice"} className="left-option-link">
            <p>Profaktura</p>
          </Link>
          <Link to={"deliverynote"} className="left-option-link">
            <p>Otpremnica</p>
          </Link>
          <Link to={"salesinvoice"} className="left-option-link">
            <p>Racuni (Izlazni)</p>
          </Link>
          <Link to={"purchaseinvoice"} className="left-option-link">
            <p>Racuni (Ulazni)</p>
          </Link>
          <Link to={"creditnote"} className="left-option-link">
            <p>Avanski racuni</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Invoice;
