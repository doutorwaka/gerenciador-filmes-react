import "./style.css";
import axios from "axios";
import {useState, useEffect} from "react";
import { BACKEND_URL } from "../../config";
import { Filmcard } from "../../components/filmcard";

function filmsHandler(films){
    
    if(!Array.isArray(films)){
        return films;
    }
    
    var i  = 0;

    var content = films.map(function(film){
        console.log(film);

        var elenco = film.elenco.map(function(actor){
            return actor.nome + ", ";
        })

        return(
            <Filmcard key={i++} 
            title={film.nome}  
            director={film.diretor.nome}
            cast={elenco}
            grade={film.nota}
            />
        );
    });

    return content;
}

export function Films (){

    const [films, setFilms] = useState("Nada a mostrar");

    useEffect(function(){
        axios.get(BACKEND_URL + "/filmes")
        .then(function (response){
            setFilms(filmsHandler(response.data));
        })
        .catch(function(error){
            console.log("Error: " + error);
        })
        .finally(function(){
        });
    }, []);

    return (
        <div className="content">
            <h1>FILMES</h1>
            <div className="cards">
                {films}
            </div>
        </div>
    );
}