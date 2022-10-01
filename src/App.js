import "./App.css";
import Dash from "./components/dash/Dash";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <div className="bg-slate-100 place-items-center grid grid-cols-12 min-h-screen w-full">
        {/* navbar _ left section */}
        <NavBar />
        {/*  body _ right section */}
        <Dash />
      </div>
    </>
  );
}

export default App;
