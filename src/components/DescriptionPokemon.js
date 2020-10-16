import React from 'react';

import QualityPokemon from './QualityPokemon';

export default function DescriptionPokemon(props){
  const {weight,height,experience,types,abilities} = props;

  return (
    <div className='box-shadow description'>
      <div>
        <QualityPokemon name={"Peso"} value={weight} />
        <QualityPokemon name={"Altura"} value={height} />
        <QualityPokemon name={"Exp. Base"} value={experience} />
      </div>

      <QualityPokemon 
        name={"Tipos"} 
        value={types.map(a => <h3>• {a.type.name}</h3>)} 
      />
      <QualityPokemon 
        name={"Habilidades"} 
        value={abilities.map(a => <h3>• {a.ability.name}</h3>)} 
      />
    </div>
  )
}