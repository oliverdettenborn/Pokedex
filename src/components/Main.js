import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

import Pokemon from './Pokemon';
import Search from './Search';

export default function Main(props){
  const {pokemons,setPokemons} = props;
  const [loading,setLoading] = useState(true);
  const [textSearch,setTextSearch] = useState('');

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
      setTimeout(() => setLoading(false),500)
    })
  },[])

  if(loading || pokemons.length === 0){
    return <img src='/images/pokemongo.gif' className='spinner' alt='Carregando'/>
  }

  return (
    <>
      <Search textSearch={textSearch} setTextSearch={setTextSearch} />
      <ul className='container-pokemons'>
        {pokemons
          .filter(e => e.name.includes(textSearch))
          .map(p => <Pokemon name={p.name} id={p.id} key={p.id} />)
        }
      </ul>
    </>
  )
}