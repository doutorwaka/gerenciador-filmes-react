import "./style.css";

export function Home (){
    return (
        <div className="content">
            <h1>HOME</h1>

            <div className="home-form">
                <h3 className="home-form">Inserir novo filme:</h3>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Nome do filme"/></p>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Diretor"/></p>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Nota"/></p>
                
                <h3 className="home-form">Elenco:</h3>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Nome do ator"/></p>
            </div>
        </div>
    );
}