import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WhiteBox } from './';

export default function Pokemon({ name,id, border }){
  return (
    <Link to={`/pokemon/${id}`}>
      <WhiteBox width='150px' height='150px' border={border}>
        <Image src={
          (id < 650) 
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif` 
          : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <Name>{name}</Name>
        <Id>{`#${id}`}</Id>
      </WhiteBox>
    </Link>
  )
}

const Name = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Id = styled.h5`
  font-size: 16px;
  color: #8e8e8e;
  font-weight: 300;
  margin-top: 5px;
  text-transform: capitalize;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;