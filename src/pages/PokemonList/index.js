import React, { useState, useContext }  from 'react';
import styled from 'styled-components';
import { Search, Spinner, Pokemon } from '../../components';
import PokemonsContext from '../../context/PokemonsContext';

export default function PokemonList(){
  const [textSearch,setTextSearch] = useState('');
  const { pokemons, loading } = useContext(PokemonsContext);
  
  if(loading || pokemons.length === 0){
    return <Spinner />
  }

  return (
    <>
      <Search 
        textSearch={textSearch} 
        setTextSearch={(e) => setTextSearch(e.target.value)} 
      />
      <Container >
        {pokemons
          .filter(e => e.name.includes(textSearch))
          .map(p => <Pokemon name={p.name} id={p.id} key={p.id} border={true} />)
        }
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 10px;
`;