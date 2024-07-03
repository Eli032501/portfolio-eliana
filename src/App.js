import "./App.css";
import Navheader from "./Navheader.js";
import Header from "./Header.js";
import MyProjects from "./MyProjects.js";
import About from "./About.js";
import Contacts from "./Contacts.js";

function App() {
  return (
    <div className="App container-fluid">
      <Navheader />
      <Header />
      <MyProjects />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
