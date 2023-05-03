import "./style.css";
import {BACKEND_URL} from "../../config";
import axios from "axios";
import {useState, useEffect} from "react";

function actorsHandler(actors){
    
    if(!Array.isArray(actors)){
        return actors;
    }
    
    var i  = 0;

    var content = actors.map(function(actor){
        return(
            <div className="actors-content" key={i++}>{i+1} - {actor.nome}</div>
        );
    });

    return content;
}

export function Actors(){

    const [actors, setActors] = useState("Nada a mostrar");

    useEffect(function(){
        axios.get(BACKEND_URL + "/atores")
        .then(function (response){
            if(response.data == "")
                return;
                
            setActors(actorsHandler(response.data));
        })
        .catch(function(error){
            console.log("Error: " + error);
        })
        .finally(function(){
        });
    }, []);

    return (
        <div className="content">
            <h1>ATORES</h1>
            {actors}
        </div>
    );
}