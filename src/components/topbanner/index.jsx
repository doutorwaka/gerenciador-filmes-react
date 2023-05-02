import DoutorWakaLogo from "./imgs/logo.png";
import "./style.css";

export function Topbanner(){
    return(
        <div className="topbanner">
            <img src={DoutorWakaLogo} alt="Dr. Waka" className="topbanner"/>
            <center className="topbanner">GERENCIADOR DE FILMES</center>
        </div>
    );
}