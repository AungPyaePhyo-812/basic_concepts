import React from 'react'

import styled from 'styled-components'



const Button = styled.button`
    border:none;
    background-color:blue;
    color:white;
`

function CompoB() {
  return (
    <div>
        <Button>Click Me</Button>
        <a href="#">Go to our site</a>
    </div>

  )
}

export default CompoB
