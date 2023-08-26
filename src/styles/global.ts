import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(123, 150, 178, .4);
  }

  body {
    background-color: ${({ theme }) => theme["base-90"]};
    color: ${({ theme }) => theme["base-30"]};
    -webkit-font-smoothing: antialiased;
    font-family: 'Nunito', sans-serif;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  p {
    line-height: 160%;
  }

  a {
    color: ${({ theme }) => theme["primary"]};
  }

  a.button-link {
    align-items: center;
    display: flex;
    gap: .5rem;
    color: ${({ theme }) => theme["primary"]};
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    background: transparent;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    svg {
      color: ${({ theme }) => theme["primary"]};
      height: 0.75rem;
    }
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme["base-10"]};
  }

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 160%;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 160%;
  }
`;