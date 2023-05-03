import "./style.css";
import { BsFilePlusFill as PlusIcon } from "react-icons/bs";
import { BsFileMinusFill as MinusIcon } from "react-icons/bs";
import { useState } from "react";

function decreaseCastSize(castSize, setCastSize) {
    if (castSize > 1)
        setCastSize(castSize - 1);
}

function createCastInputs(castSize, setCastSize) {

    var content = [];

    for (var i = 0; i < castSize; i++) {
        content.push(
            (
                <p className="home-form" key={i}>
                    <input type="text" className="actor" size={40} placeholder="Nome do ator" />
                    <MinusIcon size={25} className="home-form-icon" onClick={() => decreaseCastSize(castSize, setCastSize)} />
                    <PlusIcon size={25} className="home-form-icon" onClick={() => setCastSize(castSize + 1)} />
                </p>
            )
        );
    }

    return content;
}

export function Home() {

    const [castSize, setCastSize] = useState(1);

    return (
        <div className="content">
            <h1>HOME</h1>
            mensagem vai aqui
            <div className="home-form">
                <form onSubmit={function(e){e.preventDefault(); console.log(e)}}>
                    <h3 className="home-form">Inserir novo filme:</h3>
                    <p className="home-form"><input type="text" className="name" size={40} placeholder="Nome do filme" /></p>
                    <p className="home-form"><input type="text" className="director" size={40} placeholder="Diretor" /></p>
                    <p className="home-form"><input type="text" className="grade" size={40} placeholder="Nota" /></p>

                    <h3 className="home-form">Elenco:</h3>

                    {createCastInputs(castSize, setCastSize)}

                    <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar novo filme" /></p>
                </form>
            </div>
        </div>
    );
}