import "./App.css";
import Navheader from "./Navheader.js";
import Header from "./Header.js";
import MyProjects from "./MyProjects.js";

function App() {
  return (
    <div className="App container-fluid">
      <Navheader />
      <Header />
      <MyProjects />
    </div>
  );
}

export default App;
