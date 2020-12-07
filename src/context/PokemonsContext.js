import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PokemonsContext = createContext();

export default PokemonsContext;

export function PokemonsPorvider(props){
  const [pokemons,setPokemons] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=893')
      .then(response => {
        const { results } = response.data;
        setPokemons(
          results.map(e => {
            return {
              name: e.name,
              url: e.url,
              id: e.url.split('/')[6]
            }
          })
        )
        setTimeout(() => setLoading(false),500)
      })
  },[])

  return (
    <PokemonsContext.Provider value={{pokemons, quantityPokemon: pokemons.length, loading}}>
      {props.children}
    </PokemonsContext.Provider>
  )
}