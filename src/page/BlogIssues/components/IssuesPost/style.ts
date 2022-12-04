import styled from "styled-components";

export const IssuesContain = styled.article`
  border-radius: 10px;
  border: 0;

  background: ${props => props.theme['base-post']};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-height: 16.25rem;

  header{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;


    h2{
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${props => props.theme['base-title']};
    }

    span{
      font-size: .875rem;
      width: 100%;
      text-align: right;
      max-width: 7.5rem;
      line-height: 1.6;
      color: ${props => props.theme['base-span']};
    }
  }

  .description{
    overflow: hidden;
  }

`