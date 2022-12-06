import styled from 'styled-components'

export const ProfileContain = styled.header`
  width: 100%;
  max-width: 54rem;
  padding: 2rem 2.5rem;
  margin: -5.5rem auto 0;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 2rem;

  & > img {
    width: 148px;
    border-radius: 8px;
  }
`

export const ProfileHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: left;

  p {
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
