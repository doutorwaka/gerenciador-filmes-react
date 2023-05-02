import { Link } from "react-router-dom";
import "./style.css";

export function Menu(){
    return(
        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">HOME</Link>
            </nav>
            <nav className="menu">
                <Link to="/filmes" className="menu">FILMES</Link>
            </nav>
            <nav className="menu">
                <Link to="/diretores" className="menu">DIRETORES</Link>
            </nav>
            <nav className="menu">
                <Link to="/atores" className="menu">ATORES</Link>
            </nav>
        </div>
    );
}