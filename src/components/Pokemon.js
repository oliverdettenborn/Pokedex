import React from 'react'

export default function Pokemon(props){
  const {name,url,id} = props;

  return (
    <li className='pokemon'>
      <img src={
        (id < 650) 
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${parseInt(id)}.gif` 
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(id)}.png`}
      />
      <h3>{name}</h3>
      <h5>{`#${id}`}</h5>
    </li>
  )
}