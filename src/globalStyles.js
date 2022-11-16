import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
  font-size: 62.5%;

  @media(max-width: 56.25em){
    font-size: 50%;
  }
  
  @media(min-width: 112.5em){
    font-size: 75%;
  }

  @media(max-width: 75em){
    font-size: 52,25%;
  }

}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.leaflet-container{
  width: 100%;
  position: relative;
  z-index: 1;

}

`