import styled from "styled-components";

export const Container = styled.div`
    height: 6rem;
    top: 10rem;
    text-align: center;
    border-radius: 2rem;
    background-color: purple;
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
    width: 56rem;
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
`