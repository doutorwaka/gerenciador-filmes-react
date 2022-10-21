import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import "./global.css";
import { Actors } from "./pages/actors";
import { Directors } from "./pages/directors";
import { Films } from "./pages/films";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Topbar/>
      <Topbanner/>
      <Mainbody>
        <Menu/>
        <Directors/>
      </Mainbody>
      <Footer/>
    </>
  );
}

export default App;
