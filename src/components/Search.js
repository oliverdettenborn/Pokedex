import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search(props){
  const {textSearch,setTextSearch} = props;

  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} />
      <input 
        placeholder={`Pesquise pelo nome`}
        onChange={event => setTextSearch(event.target.value)}
        value={textSearch}
      />
    </div>
  )
}