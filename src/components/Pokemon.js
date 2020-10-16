import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon(props){
  const {name,id} = props;

  return (
    <Link to={`/pokemon/${id}`}>
      <div>
        <img src={
          (id < 650) 
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${parseInt(id)}.gif` 
          : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(id)}.png`}
        />
        <h3>{name}</h3>
        <h5>{`#${id}`}</h5>
      </div>
    </Link>
  )
}