import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import "./global.css";

function App() {
  return (
    <>
      <Topbar/>
      <Topbanner/>
      <Mainbody>
        <Menu/>
      </Mainbody>
      <Footer/>
    </>
  );
}

export default App;
