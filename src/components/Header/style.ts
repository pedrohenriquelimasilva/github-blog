import styled from "styled-components";
import CoverGithub from '../../assets/Cover.png'


export const HeaderContainer = styled.header`
  padding: 4rem 0 8rem;
  background: url(${CoverGithub}) no-repeat;
  background-size: cover;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`