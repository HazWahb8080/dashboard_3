import "./App.css";
import Dash from "./components/dash/Dash";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <div className="container__">
        {/* navbar _ left section */}
        <NavBar />
        {/*  body _ right section */}
        <Dash />
      </div>
    </>
  );
}

export default App;
