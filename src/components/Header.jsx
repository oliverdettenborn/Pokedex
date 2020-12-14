import React from 'react';
import styled from 'styled-components';

export default function Header(){
  return (
    <Container>
      <img src='/logo192.png' alt='Logo Pokédex' />
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: #E44141;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
  z-index: 10;

  img{
    width: 180px;
  }
`;