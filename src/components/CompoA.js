import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primary} ;
    width:300px;
    height:200px;

    h1 {
      color: ${(props) => props.theme.colors.secondary};
      font-size : ${(props) => props.theme.fonts.h1size};
    }

    h2 {
      color: ${(props) => props.theme.colors.accent || "green"};
      font-size: ${(props) => props.theme.fonts.h2size};
    }
`


function CompoA() {
  return (
 
    <Container >
      <a href="#">Go to our site</a>
    <h1>Hello</h1>
    <h2>World</h2>
    </Container>
  )
}

export default CompoA
