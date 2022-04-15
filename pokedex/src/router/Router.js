import React from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;