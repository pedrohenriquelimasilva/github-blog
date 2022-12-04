import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    border: 1px solid ${props => props.theme.blue}
  }

  body{
    background-color: ${props => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme['base-text']};
  }

  body, input, button, textarea{
    font-family: 'Nunito', san-serif;
    font: 1rem 400;
  }   
`