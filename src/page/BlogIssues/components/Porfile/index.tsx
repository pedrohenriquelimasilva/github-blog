import { ArrowSquareOut, Buildings, Users } from 'phosphor-react'
import { ProfileContain, ProfileContent, ProfileHead } from './style'
import logoGithubImage from '../../../../assets/githubLogo.svg'
import { useContext } from 'react'
import { DataGithubContext } from '../../../../Context/ContextProvider'

export function Profile() {
  const { dataGithub } = useContext(DataGithubContext)

  return (
    <ProfileContain>
      <img src={dataGithub.avatar_url} alt="" />

      <section>
        <ProfileHead>
          <h2>{dataGithub.name}</h2>
          <nav>
            <a href={dataGithub.html_url} target="_blank" rel="noreferrer">
              Github
              <ArrowSquareOut size={15} weight="bold" />
            </a>
          </nav>
        </ProfileHead>
        <ProfileContent>
          <p>{dataGithub.bio}</p>

          <div>
            <span>
              <img src={logoGithubImage} alt="" color="#3A536B" />{' '}
              {dataGithub.login}
            </span>
            <span>
              <Buildings size={20} weight="fill" color="#3A536B" />{' '}
              {dataGithub.company}
            </span>
            <span>
              <Users size={20} weight="fill" color="#3A536B" />{' '}
              {dataGithub.followers} seguidores
            </span>
          </div>
        </ProfileContent>
      </section>
    </ProfileContain>
  )
}
