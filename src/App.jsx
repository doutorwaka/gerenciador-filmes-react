import "./global.css";
import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import { Actors } from "./pages/actors";
import { Directors } from "./pages/directors";
import { Films } from "./pages/films";
import { Home } from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Topbar/>
      <Topbanner/>
      <Mainbody>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/filmes" element={<Films/>} />
          <Route path="/diretores" element={<Directors/>} />
          <Route path="/atores" element={<Actors/>} />
        </Routes>
      </Mainbody>
      <Footer/>
    </>
  );
}

export default App;
