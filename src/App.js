import "./App.css";
import Navheader from "./Navheader.js";
import Header from "./Header.js";
import MyProjects from "./MyProjects.js";
import About from "./About.js";

function App() {
  return (
    <div className="App container-fluid">
      <Navheader />
      <Header />
      <MyProjects />
      <About />
    </div>
  );
}

export default App;
