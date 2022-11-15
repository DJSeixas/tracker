import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 18rem;
    width: 150rem;
    top: 23rem;
    border-radius: 2rem;
    background-color: white;
    text-align: center;
    position: absolute;
    overflow: hidden;
    z-index: 2;

    border: 1px solid black;
`

export const Box = styled.div`
    flex: 0 1 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    :not(:last-child){
        border-right: 2px solid rgb(0,0,0, 0.1);
    }

    padding: 2.6rem 4rem;
`

export const Title = styled.h2`
    font-weight: 700;
    color: rgb(0,0,0, 0.4);
`

export const Content = styled.div`
    font-size: 3rem;
    font-weight: 700;
    text-align: start;
`
