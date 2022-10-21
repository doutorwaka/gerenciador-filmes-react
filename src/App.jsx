import { Mainbody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import "./global.css";

function App() {
  return (
    <>
      <Topbar/>
      <Topbanner/>
      <Mainbody/>
    </>
  );
}

export default App;
