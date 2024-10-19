import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="hotbar">
        <Link to={"/coders"}>
          <p>Sifarnici</p>
        </Link>
        <Link to={"/invoice"}>
          <p>Fakture</p>
        </Link>
        <Link to={"/bankStatements"}>
          <p>Izvod</p>
        </Link>
        <Link to={"/accountingLetters"}>
          <p>Knjizna pisma</p>
        </Link>
        <Link to={"/salesOrder"}>
          <p>Nalog prodaje</p>
        </Link>
        <Link to={"/export"}>
          <p>Izvoz</p>
        </Link>
      </div>
    </>
  );
}

export default Header;
