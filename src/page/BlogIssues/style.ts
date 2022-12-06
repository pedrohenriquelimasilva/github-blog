import styled from "styled-components";

export const BlogIssuesContain = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .inform-profile{ 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.6rem;

    strong{
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${props => props.theme['base-subtitle']};
    }

    span{
      font-size: .875rem;
      line-height: 1.6;
      color: ${props => props.theme['base-span']};
    }
  }
`