import React from "react";
import { usePokemon } from "./usePokemon";

const App = () => {
  const { pokemon, isLoading, error } = usePokemon("pikachu");

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Network error</>;
  }

  return (
    <>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h1>{pokemon.species.name}</h1>
    </>
  );
};

export default App;
