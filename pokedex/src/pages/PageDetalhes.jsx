import React, { useEffect, useState } from "react";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const ContainerPricipal=styled.div`
    background-color: #f9f4f9;
    display: grid ;
    min-height:83vh ;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 200px 1fr  ;
    padding: 20px ;
    box-sizing:border-box ;
    column-gap:50px;
    row-gap:30px;
    font-size:10pt ;
    overflow: hidden ;
    div{
       
        padding:10px ;
        text-align:center ;
        background-color:#bcd8bf ;
        img{
            height:150px ;
        }
        .tipo{
            display: flex ;
            justify-content: space-around ;
        }
    }
    .container-ataques{
        grid-row:2/3;
        grid-column:3/4 ;
    }
    .atributos{
        grid-row:1/ 3 ;
        grid-column:2/3 ;
       
        text-align:start ;
    }
    h3{
        text-align:center ;
    }
    span.texto{
        border:none ;
        font-weight:bolder ;
        font-size:13pt ;
    }
`
// export default ()=>{
const PageDetalhes = () => {      
    const [pokemons,setPokemons]=useState([])
    const param=useParams()
    useEffect(()=>{
        buscarPokemons()
        console.log(param)
    },[])

    const buscarPokemons=()=>{
               axios.get(`https://pokeapi.co/api/v2/pokemon/${param.id}/`).then((response)=>{
                let type1=""
                let type2=""
                   const name= response.data.name
                   console.log(response.data.moves)
                   if(response.data.types.length>1){
                     type1= response.data.types[0].type.name
                   type2=  response.data.types[1].type.name
                   }else{
                     type1= response.data.types[0].type.name
                     type2=null
                   }
                   const photo1= response.data.sprites.back_default
                   const photo2= response.data.sprites.front_default
                   setPokemons({
                       nome:name,
                       tipo1: type1,
                       tipo2: type2,
                       imagemfrente: photo2,
                       imagemCosta:photo1,
                       status:response.data.stats,
                       ataques: response.data.moves
                   })
               })
              
    }

    const renderStats=()=>{
        if(pokemons.status){
            const atributos=pokemons.status.map((pokemom,i)=>{
                    return(
                        <div key={i}>
                        <p ><span className="texto">{pokemom.stat.name}</span>: {pokemom.base_stat}</p>

                        </div>
                    )
            })
            return atributos
        }
    }
    const renderAtaques=()=>{
        if(pokemons.ataques){
            console.log(pokemons.ataques[0].move.name)
            let principaisAtaques=[]

            for(let i=0;i<5;i++){
                principaisAtaques.push(pokemons.ataques[i].move.name)
            }
            const ataques=principaisAtaques.map((ataques,i)=>{
                return(
                    <div key={i}>
                            <p> {ataques}</p>
                    </div>
                )
            })
            return ataques
        }
    }
  
    return(
        <>
            <Header/>
                <ContainerPricipal>
                    <div>
                    <img src={pokemons.imagemfrente}alt={pokemons.nome}/>
                      
                      
                    </div>
                   
                    <div>
                           <h3> tipos</h3>
                           <div className="tipo">
                             
                               <p> <span className="texto">tipo 1:</span>  {pokemons.tipo1}</p>
                              {pokemons.tipo2!==null? <p> <span className="texto">tipo 2:</span> {pokemons.tipo2}</p>:''}
                           </div>
                    </div>
                    <div className="atributos">
                        <h3>atributos</h3>

                        {renderStats()}
                    </div>
                    <div>
                   
                        <img src={pokemons.imagemCosta}alt={pokemons.nome}/>
                       <p> {pokemons.nome}</p>

                    </div>
                    
                    <div className="container-ataques">
                        <h3>Principais ataques</h3>

                        {renderAtaques()}
                    </div>
                    

                </ContainerPricipal>

            <Footer/>
        
        </>

    )
}

export default PageDetalhes;
