import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #313136;
  overflow-y: hidden;
}



button {
  cursor: pointer;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
