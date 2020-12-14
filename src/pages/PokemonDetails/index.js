import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';
import { HeaderPokemon, DescriptionPokemon } from './components';
import { Spinner } from '../../components';


export default function PokemonDetails(props){
  const { id } = useParams();
  const [pokemon,setPokemon] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
      const {name,height,weight,base_experience,abilities,types} = response.data
      setPokemon({name,height,weight,base_experience,abilities,types});
      setLoading(false)
    })
  },[id])

  if(loading || pokemon.length === 0){
    return <Spinner />
  }

  return (
    <Container>
      <Link to="/">
        <ButtonExit />
      </Link>
      <HeaderPokemon name={pokemon.name} id={id} />
      <DescriptionPokemon 
        height={pokemon.height} 
        weight={pokemon.weight}
        experience={pokemon.base_experience}
        abilities={pokemon.abilities}
        types={pokemon.types}
      />
    </Container>
  )
}

const Container = styled.article`
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 30px;
`;

const ButtonExit = styled(FaTimesCircle)`
  position: fixed;
  top: 120px;
  right: 10px;
  font-size: 20px;
  color: #8e8e8e;
`;