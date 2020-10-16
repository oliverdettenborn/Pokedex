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
        value={types.map((t,i) => <p key={i}>• {t.type.name}</p>)} 
      />
      <QualityPokemon 
        name={"Habilidades"} 
        value={abilities.map((a,i) => <p key={i}>• {a.ability.name}</p>)} 
      />
    </div>
  )
}