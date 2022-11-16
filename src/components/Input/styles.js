import styled from "styled-components";

export const Container = styled.div`
    top: 10rem;
    text-align: center;
    border-radius: 2rem;
    position: absolute;
    z-index: 2;
    overflow: hidden;
`

export const Label = styled.label`
    position: relative; 
    overflow: hidden;
`


export const InputText = styled.input.attrs(props => ({
    type: "text"
}))`
    height: 6rem;
    width: 46rem;
    border-radius: 2rem;
    font-family: inherit;
    border: none;
    padding-left: 3rem;
    overflow: hidden;

    font-weight: 500;
    font-size: 1.8rem;

    &:focus-visible{
        outline: none;
    }

    @media(max-width: 56.25em){
    width: 42rem;
    height: 5rem;
    }

    @media((max-width: 37.5em)){
        width: 28rem;
        height: 4rem;
        padding-left: 1rem;
        font-size: 1.2rem;
    }
`

export const InputButton = styled.button`
    height: 6.4rem;
    width: 6.4rem;
    background-color: black;
    position: absolute;
    right: 0;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 56.25em){
        width: 5.4rem;
        height: 6rem;
    }

    @media((max-width: 37.5em)){
        width: 4.4rem;
        height: 4.2rem;
    }
`