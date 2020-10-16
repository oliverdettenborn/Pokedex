import React from 'react';

import Pokemon from './Pokemon'

export default function HeaderPokemon(props){
  const {id,name} = props;
  return(
    <header className='box-shadow'>
      <Pokemon id={id} name={name} />
    </header>
  )
}