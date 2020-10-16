import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import Pokemon from './Pokemon';

export default function HeaderPokemon(props){
  const {id,name,quantityPokemon} = props;
  return(
    <header className='box-shadow'>
      {(id > 1) &&
        <Link to={`/pokemon/${parseInt(id)-1}`}>
          <FontAwesomeIcon className='icon' icon={faChevronLeft} />
        </Link>
      }
      <Pokemon id={id} name={name} />
      {(id < 893 || id < quantityPokemon) &&
        <Link to={`/pokemon/${parseInt(id)+1}`}>
          <FontAwesomeIcon className='icon' icon={faChevronRight} />
        </Link>
      }
    </header>
  )
}