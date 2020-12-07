import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export default function Search({ textSearch,setTextSearch }){
  return (
    <Container>
      <FaSearch />
      <Input 
        placeholder={`Pesquise pelo nome`}
        onChange={setTextSearch}
        value={textSearch}
      />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 60px;
  color: #8e8e8e;
  padding-bottom: 10px;
  padding-top: 25px;
`;

const Input = styled.input`
  width: auto;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 170px;
  font-size: 18px;
  font-family: inherit;
  font-weight: 300;
  text-align: center;
  
  :focus{
    text-align: start;
    outline: #8e8e8e38;
    width: 70%;
  }
`;