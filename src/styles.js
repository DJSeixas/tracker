import styled from 'styled-components'
import img from './assets/images/pattern-bg.png'


export const Header = styled.section`
    height: 32rem;
    width: 100%;
    background-image: url(${img});
    background-size: cover;
    position: relative;
    z-index: 1;
`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-top: 0;
    color: white;
    padding-top: 2rem;
`