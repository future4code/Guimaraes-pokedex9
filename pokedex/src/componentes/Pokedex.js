import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import styled from "styled-components";


const Divpokedex = styled.div`
margin: 0px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
`;
const Griddiv = styled.div`
text-align: center;
padding: 10px;
margin: 0px;
display: grid;
gap: 10px;
grid-template-columns: repeat(3, 1fr);
`;

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1)
      }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  }
  return (
    <div>
      <Divpokedex>
        <h1>Pokedex</h1>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </Divpokedex>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <Griddiv>
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        </Griddiv>
      )}
    </div>
  );
};

export default Pokedex;