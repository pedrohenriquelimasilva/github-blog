import {
  ArrowArcLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
import { ProfileContain, ProfileContent, ProfileHead } from './style'
import logoGithubImage from '../../../../assets/githubLogo.svg'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'
import { IssuesProps } from '../../../../Context/ContextProvider'

interface ProfileCardProps {
  issues: IssuesProps
}

export function ProfileCard({ issues }: ProfileCardProps) {
  return (
    <ProfileContain>
      <section>
        <ProfileHead>
          <nav>
            <NavLink to="/" end title="Voltar a listagem">
              <ArrowArcLeft size={12} />
              Voltar{' '}
            </NavLink>
            <a href={issues.html_url} target="_blank" rel="noreferrer">
              Ver no Github
              <ArrowSquareOut size={15} weight="bold" />
            </a>
          </nav>

          <h2>{issues.title}</h2>
        </ProfileHead>
        <ProfileContent>
          <span>
            <img src={logoGithubImage} alt="" color="#3A536B" />{' '}
            {issues.user.login}
          </span>
          <span>
            <Calendar size={20} weight="fill" color="#3A536B" />{' '}
            {formatDistanceToNow(new Date(issues.created_at), {
              addSuffix: true,
              locale: ptbr,
            })}
          </span>
          <span>
            <ChatCircle size={20} weight="fill" color="#3A536B" />{' '}
            {issues.comments} comentários
          </span>
        </ProfileContent>
      </section>
    </ProfileContain>
  )
}
