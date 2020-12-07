import React from 'react';
import styled from 'styled-components';
import { QualityPokemon } from './index';
import { WhiteBox } from '../../../components';

export default function DescriptionPokemon(props){
  const { weight, height, experience, types,abilities } = props;

  return (
    <WhiteBox border={true} width='90%' height='100%'>
      <HeaderDescription>
        <QualityPokemon name={"Peso"} value={weight} />
        <QualityPokemon name={"Altura"} value={height} />
        <QualityPokemon name={"Exp. Base"} value={experience} />
      </HeaderDescription>

      <Abilities>
        <QualityPokemon 
          name={"Tipos"}
          value={types.map((t,i) => <p key={i}>• {t.type.name}</p>)} 
        />
        <QualityPokemon 
          name={"Habilidades"} 
          value={abilities.map((a,i) => <p key={i}>• {a.ability.name}</p>)} 
        />
      </Abilities>
    </WhiteBox>
  )
}

const HeaderDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-bottom: 15px;
`;

const Abilities = styled.div`
  display: block;
  text-align: left;
  padding: 15px 0;
`;