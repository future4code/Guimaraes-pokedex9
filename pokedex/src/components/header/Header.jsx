import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.css"



export default ()=>{
    const navigate=useNavigate()

    const voltar=()=>{
       navigate("/")
        
    }
    const irPokedex=()=>{
        navigate("/pokedex")
    }
    return(
        <div className="container">
            <span> <img src="https://o.remove.bg/downloads/5046d4b1-d82b-4cb0-a3c4-b01430b2aab6/pokeapi_256-removebg-preview.png"/></span>
            <h1>lista de Pokemons</h1>
            <div>
            <button onClick={()=>irPokedex()}>ir para Pokedex </button>
            <button onClick={()=>voltar()}>voltar</button>
            </div>
        </div>
    )
}