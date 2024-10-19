import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="hotbar">
        <Link to={"/coders"}>
          <p>Sifarnici</p>
        </Link>
        <Link to={"/invoice"}>
          <p>Fakture</p>
        </Link>
        <Link to={"/bankstatements"}>
          <p>Izvod</p>
        </Link>
        <Link to={"/accountingletters"}>
          <p>Knjizna pisma</p>
        </Link>
        <Link to={"/salesorder"}>
          <p>Nalog prodaje</p>
        </Link>
        <Link to={"/export"}>
          <p>Izvoz</p>
        </Link>
      </div>
    </>
  );
}
export default HomePage;
