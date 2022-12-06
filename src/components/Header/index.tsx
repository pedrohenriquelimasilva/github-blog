import { HeaderContainer, HeaderContent } from './style'
import LogoGithub from '../../assets/logoGithubBlog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoGithub} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
