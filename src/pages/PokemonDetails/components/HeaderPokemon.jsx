import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { WhiteBox, Pokemon } from '../../../components';
import PokemonsContext from '../../../context/PokemonsContext';

export default function HeaderPokemon(props){
  const { id, name } = props;
  const { quantityPokemon } = useContext(PokemonsContext);
  return(
    <WhiteBox border={true} width='90%' height='100%'>
      <Container>
        {(id > 1) &&
          <Link to={`/pokemon/${parseInt(id)-1}`}>
            <IconLeft />
          </Link>
        }
        <Pokemon id={id} name={name} border={false} />
        {(id < 893 || id < quantityPokemon) &&
          <Link to={`/pokemon/${parseInt(id)+1}`}>
            <IconRigth />
          </Link>
        }
      </Container>
    </WhiteBox>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  position: relative;
  height: 135px;
`

const IconLeft = styled(FaChevronLeft)`
  font-size: 50px;
  margin: 0px 5px;
  color: #a5a5a5;
  position: absolute;
  left: 0px;
  top: calc(50% - 25px);
`
const IconRigth = styled(FaChevronRight)`
  font-size: 50px;
  margin: 0px 5px;
  color: #a5a5a5;
  position: absolute;
  right: 0px;
  top: calc(50% - 25px);
`