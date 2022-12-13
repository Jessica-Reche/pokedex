import { useEffect, useState } from "react";

import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);

  const [offset, setOffset] = useState(0);

  //Carga de la aplicación
  const [loading, setLoading] = useState(true);

  const getAllPokemons = async (limit = 50) => {
    //Llamar a 50 pokemons

    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  //Funcion para llamar a cada pokemon por id
  const getPokemonById = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line
  }, [offset]);

  // BTN PARA CARGAR MÁS
  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        getPokemonById,
        onClickLoadMore,
        loading,
        setLoading
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
