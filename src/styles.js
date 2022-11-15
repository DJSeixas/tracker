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

/* .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }

}
.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
 */