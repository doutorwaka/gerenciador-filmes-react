import { BsFilePlusFill as PlusIcon } from "react-icons/bs";
import { BsFileMinusFill as MinusIcon } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import "./style.css";

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
                    <input type="text" className="home-form" size={40} name="actor" placeholder="Nome do ator" />
                    <MinusIcon size={25} className="home-form-icon" onClick={() => decreaseCastSize(castSize, setCastSize)} />
                    <PlusIcon size={25} className="home-form-icon" onClick={() => setCastSize(castSize + 1)} />
                </p>
            )
        );
    }

    return content;
}

function formDataToJsonMapper(film, director, actors, grade) {
    let formatedData = {
        nome: film,
        diretor: { nome: director },
        elenco: actors.map(actor => {
            return { nome: actor }
        }),
        nota: grade
    };

    return JSON.stringify(formatedData);
}

async function formHandle(e) {
    e.preventDefault();

    const film = e.target.film.value;
    const director = e.target.director.value;
    const grade = e.target.grade.value;

    const actors = Array.from(e.target.actor).map(actor => actor.value);

    const jsonData = formDataToJsonMapper(film, director, actors, grade);

    const axiosConfig = { headers: { 'Content-Type': 'application/json' } };

    await axios.post(BACKEND_URL + "/filmes", jsonData, axiosConfig);
}

export function Home() {

    const [castSize, setCastSize] = useState(1);

    return (
        <div className="content">
            <h1>HOME</h1>
            mensagem vai aqui
            <div className="home-form">
                <form onSubmit={async (e) => await formHandle(e)}>
                    <h3 className="home-form">Inserir novo filme:</h3>
                    <p className="home-form"><input type="text" className="home-form" size={40} name="film" placeholder="Nome do filme" /></p>
                    <p className="home-form"><input type="text" className="home-form" size={40} name="director" placeholder="Diretor" /></p>
                    <p className="home-form"><input type="text" className="home-form" size={40} name="grade" placeholder="Nota" /></p>

                    <h3 className="home-form">Elenco:</h3>

                    {createCastInputs(castSize, setCastSize)}

                    <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar novo filme" /></p>
                </form>
            </div>
        </div>
    );
}