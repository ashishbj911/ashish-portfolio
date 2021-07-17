import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import errorImage from '../images/error-img.jpg'

export const Error = () => {
    return (
        <Wrapper>
        <div className="container">
            <div className="section error-page text-center">
                <img src={errorImage} alt="error-page"/>
               <Link to="/" className="btn">Back to Home</Link>
            </div>
        </div>
        </Wrapper>
    )
}
 const Wrapper = styled.main`
   .error-page img{
       margin:0 auto 2rem;
       display:block;
   }
   @media(max-width:991px){
    .error-page img{
      width:100%;
    }
   }
 `