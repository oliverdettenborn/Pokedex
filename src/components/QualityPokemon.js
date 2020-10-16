import React from 'react';

export default function QualityPokemon(props){
  return (
    <span>
      {props.name} 
      <span>{props.value}</span>
    </span>
  )
}