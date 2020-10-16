import React from 'react';

import QualityPokemon from './QualityPokemon';

export default function DescriptionPokemon(props){
  const {weight,height,experience,types,abilities} = props;

  return (
    <div className='box-shadow'>
      <div>
        <QualityPokemon name={"Peso"} value={weight} />
        <QualityPokemon name={"Altura"} value={height} />
        <QualityPokemon name={"Exp. Base"} value={experience} />
      </div>

      <QualityPokemon 
        name={"Tipos"} 
        value={types.map(a => <li>{a.type.name}</li>)} 
      />
      <QualityPokemon 
        name={"Habilidades"} 
        value={abilities.map(a => <li>{a.ability.name}</li>)} 
      />
    </div>
  )
}