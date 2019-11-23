import React from "react";

export function usePokemon(pokemonName) {
  const [pokemon, setPokemon] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const json = await res.json();
        setPokemon(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [pokemonName]);
  return { pokemon, error, isLoading };
}
