import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AnimationSucces from "./components/Animation";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import TabelLogBook from "./components/TabelLogBook";
import TableHasil from "./components/TableHasil";

function App() {
  return (
    <div className="">
    <HashRouter>
      <Route exact path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/tabel' element={<TabelLogBook/>} />
      <Route path='/success' element={<AnimationSucces/>} />
      <Route path='/tabelhasil' element={<TableHasil/>} />
    </HashRouter>
      {/* <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks /> */}
    </div>
  );
}

export default App;
