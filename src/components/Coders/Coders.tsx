import { useState } from "react";
import "./Coders.css";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import WareHouse from "./SideBar/WareHouse/WareHouse";
import Partners from "./SideBar/Partners/Partners";
import PriceList from "./SideBar/Pricelist/PriceList";
import Articles from "./SideBar/Articles/Articles";

function Coders() {
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
          <Link to={"warehouse"} className="left-option-link">
            <p>Magacin</p>
          </Link>
          <Link to={"partners"} className="left-option-link">
            <p>Partneri</p>
          </Link>
          <Link to={"pricelist"} className="left-option-link">
            <p>Cenovnik</p>
          </Link>
          <Link to={"articles"} className="left-option-link">
            <p>Artikli</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Coders;