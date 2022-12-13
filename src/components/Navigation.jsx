import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const Navigation = () => {
  useContext(PokemonContext);

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>
      </header>

      <Outlet />
    </>
  );
};
