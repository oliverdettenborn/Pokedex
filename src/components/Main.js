import React from 'react';
import {useEffect} from 'react';
import axios from 'axios';

import Pokemon from './Pokemon';

export default function Main(props){
  const {pokemons,setPokemons} = props;

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=893').then(response => {
      const {results} = response.data;
      setPokemons(
        results.map(e => {
          const id = e.url.split('/')
          return {
            name: e.name,
            url: e.url,
            id: id[6]
          }
        })
      )
    })
  },[])

  return (
    <ul className='container-pokemons'>
      {pokemons.map(p => 
        <Pokemon name={p.name} url={p.url} id={p.id} key={p.id} />
      )}
    </ul>
  )
}