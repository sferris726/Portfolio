import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Interests from "./components/interests/Interests";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import "./app.scss"
import { useState } from "react";

function App() 
{
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <About/>
        <Interests/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;