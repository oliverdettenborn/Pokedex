import React from 'react';

export default function HeaderPokemon(props){
  const {id,name} = props;
  return(
    <div className='box-shadow'>
      <img src={
        (id < 650) 
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${parseInt(id)}.gif` 
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(id)}.png`}
      />
      <h3>{name}</h3>
    </div>
  )
}