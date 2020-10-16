import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search(){
  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} />
      <input placeholder={`Pesquise pelo nome`} />
    </div>
  )
}