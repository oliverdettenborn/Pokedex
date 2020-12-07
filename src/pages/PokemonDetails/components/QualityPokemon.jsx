import React from 'react';
import styled from 'styled-components';

export default function QualityPokemon(props){
  return (
    <div>
      <Name>{props.name}</Name>
      <Value>{props.value}</Value>
    </div>
  )
}

const Name = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Value = styled.h5`
  font-size: 20px;
  color: #8e8e8e;
  font-weight: 300;
  margin-top: 5px;
  text-transform: capitalize;

  p{
  text-transform: capitalize;
}
`;