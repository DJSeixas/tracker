import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 17rem;
    width: 80%;
    top: 23rem;
    border-radius: 2rem;
    background-color: white;
    text-align: center;
    position: absolute;
    overflow: hidden;
    z-index: 2;

    border: 1px solid black;

    @media(max-width: 56.25em){
        height: 16rem;
    }

    @media((max-width: 37.5em)){
        flex-direction: column;
        height: 30rem;
        width: 60%;
    }

`

export const Box = styled.div`
    flex: 0 1 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    :not(:last-child){
        border-right: 2px solid rgb(0,0,0, 0.1);
    }

    padding: 2.2rem 3rem;

    @media(max-width: 56.25em){
        padding: 2rem 2.8rem;
    }

    @media((max-width: 37.5em)){
        align-items: center;
        justify-content: center;

        padding: .2rem;
    }
`

export const Title = styled.h2`
    font-weight: 700;
    color: rgb(0,0,0, 0.4);
`

export const Content = styled.div`
    font-size: 2.8rem;
    font-weight: 700;
    text-align: start;

    @media(max-width: 56.25em){
        font-size: 2.4rem;
    }

    @media((max-width: 37.5em)){
        font-size: 1.8rem;
    }
`
