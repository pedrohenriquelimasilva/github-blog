import { Routes, Route } from 'react-router-dom'
import { LayoutGithubBlog } from './LayoutGithubBlog'
import { BlogIssues } from './page/BlogIssues'
import { IssuesPage } from './page/IssuesPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutGithubBlog />}>
        <Route path="/" element={<BlogIssues />} />
        <Route path="/issues/:numberIssues" element={<IssuesPage />} />
      </Route>
    </Routes>
  )
}
