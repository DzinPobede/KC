import { useNavigate } from "react-router-dom";
import "./LogInPage.css";

function LogInPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/HomePage");
  }
  return (
    <>
      <div className="title-container">
        <h1 className="login-title">Log In</h1>
      </div>
      <div className="login-container-username">
        <input type="text" placeholder="Username" className="input" />
      </div>
      <div className="login-container-password">
        <input type="text" placeholder="Password" className="input" />
      </div>
      <div className="login-button">
        <input type="button" value={"log in"} className="sumbit" onClick={handleClick}/>
      </div>
    </>
  );
}
export default LogInPage;