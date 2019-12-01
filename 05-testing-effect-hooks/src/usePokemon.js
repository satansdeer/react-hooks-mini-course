import React from "react";

export function usePokemon(pokemonName) {
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 
        const json = await response.json()
        setPokemon(json)
      }catch(e){
        setError(e)
      }
      setIsLoading(false)
    }
    fetchData();
  }, [pokemonName])

  return { pokemon, error, isLoading };
}
