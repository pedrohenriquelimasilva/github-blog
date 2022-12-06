import styled from 'styled-components'

export const SearchFormContain = styled.form`
  width: 100%;
  margin-top: 0.75rem;

  input {
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    :focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
      line-height: 1.6;
    }

    ::disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`
