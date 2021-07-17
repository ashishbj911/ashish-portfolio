import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <Wrapper>
            <p>Copyright &#169; {new Date().getFullYear()}. All Rights Reserved</p>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
  background:#f2f2f2;
  text-align:center;
  padding:1.5rem 0;
  p{
    margin:0;
  }
`
