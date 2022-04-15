import React from "react";
import"./cardPokemom.css"





export default ()=>{
    return(
        <div className="card-pokemom">
            <img  src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png" alt="pokemom"/>
            <div>
                <button>Adicionar Pokemom</button>
                <button>Ver detalhes</button>
            </div>
        </div>
    )
}