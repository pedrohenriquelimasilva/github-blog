import { useContext, useEffect } from 'react'
import { DataGithubContext } from '../../Context/ContextProvider'
import { AllPosts } from './components/AllPosts'
import { Profile } from './components/Porfile'
import { SearchInsues } from './components/SearchInsues'
import { BlogIssuesContain } from './style'

export function BlogIssues() {
  const { searchReposIssues, searchInitProject, getSchemaGithub } =
    useContext(DataGithubContext)

  useEffect(() => {
    searchInitProject()
    getSchemaGithub()
  }, [getSchemaGithub, searchInitProject])

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
