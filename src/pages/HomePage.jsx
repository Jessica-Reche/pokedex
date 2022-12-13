import { PokemonList } from "../components";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const Homepage = () => {
  const { onClickLoadMore } = useContext(PokemonContext);
  return (
    <>
      <PokemonList />
      <div className="container-btn-load-more container">
        {
          <button className="btn-load-more" onClick={onClickLoadMore}>
            Cargar más
          </button>
        }
      </div>
    </>
  );
};
