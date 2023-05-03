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
                <p className="home-form">
                    <div><input type="text" className="home-form" size={40} placeholder="Nome do ator" /></div>
                    <div><MinusIcon size={25} className="home-form-icon" onClick={() => decreaseCastSize(castSize, setCastSize)} /></div>
                    <div><PlusIcon size={25} className="home-form-icon" onClick={() => setCastSize(castSize + 1)} /></div>
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
                <h3 className="home-form">Inserir novo filme:</h3>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Nome do filme" /></p>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Diretor" /></p>
                <p className="home-form"><input type="text" className="home-form" size={40} placeholder="Nota" /></p>

                <h3 className="home-form">Elenco:</h3>

                {createCastInputs(castSize, setCastSize)}

                <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar novo filme" /></p>
            </div>
        </div>
    );
}