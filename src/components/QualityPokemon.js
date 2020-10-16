import React from 'react';

export default function QualityPokemon(props){
  return (
    <div>
      <h5>{props.name}</h5>
      <h3>{props.value}</h3>
    </div>
  )
}