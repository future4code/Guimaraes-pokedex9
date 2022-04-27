import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styled from "styled-components";




const Nav = styled.nav`
margin: 0px;
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
color: azure;
`;

const Div = styled.div`
margin: 0px;
padding: 0px;
width: 160px;
`;

const Div1 = styled.div`
margin: 0px;
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Nav>
      <Div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </Div>
      <Div1>{favoritePokemons.length} ❤️</Div1>
    </Nav>
  );
};

export default Navbar;