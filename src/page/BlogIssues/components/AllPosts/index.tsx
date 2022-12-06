import { NavLink } from 'react-router-dom'
import { IssuesProps } from '../../../../Context/ContextProvider'
import { IssuesPost } from '../IssuesPost'
import { AllPostsContain } from './style'

interface AllPostsProps {
  items: IssuesProps[]
}

export function AllPosts({ items }: AllPostsProps) {
  return (
    <AllPostsContain>
      {items.map((issue) => {
        return (
          <NavLink
            to={`/issues/${issue.number}`}
            key={issue.id}
            className="Link"
          >
            <IssuesPost issues={issue} />
          </NavLink>
        )
      })}
    </AllPostsContain>
  )
}
