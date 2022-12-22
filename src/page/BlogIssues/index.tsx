import { useContext } from 'react'
import { DataGithubContext } from '../../Context/ContextProvider'
import { AllPosts } from './components/AllPosts'
import { Profile } from './components/Porfile'
import { SearchInsues } from './components/SearchInsues'
import { BlogIssuesContain } from './style'

export function BlogIssues() {
  const { searchReposIssues } = useContext(DataGithubContext)

  return (
    <BlogIssuesContain>
      <Profile />

      <div className="inform-profile">
        <strong>Publicações</strong>
        <span>{searchReposIssues.total_count} publicações</span>
      </div>
      <SearchInsues />

      {searchReposIssues.items ? (
        <AllPosts items={searchReposIssues.items} />
      ) : (
        <></>
      )}
    </BlogIssuesContain>
  )
}
