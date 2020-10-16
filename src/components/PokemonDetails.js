import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import HeaderPokemon from './HeaderPokemon';
import DescriptionPokemom from './DescriptionPokemon';

export default function PokemonDetails(){
  const {id} = useParams();
  const [pokemon,setPokemon] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
      const {name,height,weight,base_experience,abilities,types} = response.data
      setPokemon({name,height,weight,base_experience,abilities,types});
      setTimeout(() => setLoading(false),500)
    })
  },[])

  if(loading || pokemon.length === 0){
    return <img src='/images/pokemongo.gif' className='spinner' alt='Carregando'/>
  }

  return (
    <article className='container-pokemon-select'>
      <HeaderPokemon name={pokemon.name} id={id} />
      <DescriptionPokemom 
        height={pokemon.height} 
        weight={pokemon.weight}
        experience={pokemon.base_experience}
        abilities={pokemon.abilities}
        types={pokemon.types}
      />
    </article>
  )
}