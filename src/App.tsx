import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
}

export default App;