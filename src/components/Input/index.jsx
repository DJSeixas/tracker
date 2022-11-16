import React from "react";

import { Container, Label, InputText, InputButton } from "./styles";

const Input = ({ handleChange, handleKeyDown, handleClick}) => {

    return (
    <Container>
        <Label>
            <InputText 
            onChange={handleChange}
            onKeyDown={handleKeyDown} 
            placeholder="Search for any IP adress or domain" 
            ></InputText>
            <InputButton onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" d="M2 1l6 6-6 6"/></svg></InputButton>
        </Label>
    </Container>
    )
}

export default Input