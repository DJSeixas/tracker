import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
  font-size: 62.5%;
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
  height: 70vh;
  width: 100%;
  position: relative;
  z-index: 1;
}

`