import styled from 'styled-components'

export const AllPostsContain = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  .Link {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }
`
