import React from 'react';
import styled from 'styled-components';

export default function WhiteBox({ children, width, height, border }){
  return (
    <Container width={width} height={height} border={border}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #fff;
  flex-shrink: 0;
  margin:10px;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  padding: 15px;
  -webkit-box-shadow: ${props => props.border ? '0px 5px 5px 0px rgba(0,0,0,0.75)' : 'none'};
  -moz-box-shadow: ${props => props.border ? '0px 5px 5px 0px rgba(0,0,0,0.75)' : 'none'};
  box-shadow: ${props => props.border ? '0px 5px 5px 0px rgba(0,0,0,0.75)' : 'none'};
`;