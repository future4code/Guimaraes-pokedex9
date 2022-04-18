import React from "react";
import HomePage from "../pages/HomePage";
import PageDetalhes from "../pages/PageDetalhes";
import Pokedex from "../pages/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<HomePage />} />
          <Route exact path={"/pokedex"} element={<Pokedex />} />
          <Route exact path={"/details/:id"} element={<PageDetalhes />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;