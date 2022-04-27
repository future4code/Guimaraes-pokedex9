import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styled from "styled-components";


const DivCard = styled.div`
margin: 0px;
display: flex;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
`;

const DivImage = styled.div`
padding: 0px 5px;
`;

const DivCardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px 10px 10px 0px;
flex: 1;
`;

const DivCardTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const DivCardBottom = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const DivType = styled.div`
display: flex;
`;

const DivText = styled.div`
margin-right: 10px;
text-transform: capitalize;
`;

const Button = styled.button`
border: none;
background-color: white;
box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
padding: 4px;
cursor: pointer;
align-items: center;
`;

const H3 = styled.h3`
text-transform: capitalize;
`;

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
    <DivCard>
        <DivImage>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
        </DivImage>
        <DivCardBody>
            <DivCardTop>
                <H3> {pokemon.name}</H3>
                <div>#{pokemon.id}</div>
            </DivCardTop>
            <DivCardBottom>
                <DivType>
                    {pokemon.types.map((type, index) => {
                        return (
                            <DivText key={index}>{type.type.name}</DivText>
                        )
                    })}
                </DivType>
                <Button onClick={onHeartClick}>
                    {heart}
                </Button>
            </DivCardBottom>
        </DivCardBody>
    </DivCard>)
}

export default Pokemon;