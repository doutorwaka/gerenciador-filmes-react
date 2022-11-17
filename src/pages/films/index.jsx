import "./style.css";
import axios from "axios";
import {useState, useEffect} from "react";
import { BACKEND_URL } from "../../config";

function filmsHandler(films){
    
    if(!Array.isArray(films)){
        return films;
    }
    
    var i  = 0;

    var content = films.map(function(film){
        return(
            <div className="film-content" key={i++}>{i+1} - {film.nome}</div>
        );
    });

    return content;
}

export function Films (){

    const [films, setFilms] = useState("Nada a mostrar");

    useEffect(function(){
        axios.get(BACKEND_URL + "/filmes")
        .then(function (response){
            console.log("RODADNO... ");
            setFilms(filmsHandler(response.data));
        })
        .catch(function(error){
            console.log("Error: " + error);
        })
        .finally(function(){
            console.log("Finally.");
        });
    }, []);

    return (
        <div className="content">
            <h1>FILMES</h1>
            {films}
        </div>
    );
}