import React from 'react';
import styled from 'styled-components';

export default function Spinner(){
  return <Image src='/spinner.gif' alt='Carregando'/>
}

const Image = styled.img`
  width: 100vw;
  margin: auto 0;
`;