import React from "react";
import styled from "styled-components";
import"./cardPokemom.css"

const Container=styled.div`
    height:250px ;
    
    padding:10px ;

    img{
        height:70% ;
        margin:10px ;
        
    }
    button:hover{
        background-color: #fff856 ;
        cursor: pointer ;
    }
`



export default ()=>{
    return(
        <Container className="card-pokemom">
            <img  src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png" alt="pokemom"/>
            <div>
                <button>Adicionar Pokemom</button>
                <button>Ver detalhes</button>
            </div>
        </Container>
    )
}