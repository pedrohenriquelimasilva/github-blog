import { useContext } from "react";
import { DataGithubContext } from "../../Context/ContextProvider";
import { IssuesPost } from "./components/IssuesPost";
import { Profile } from "./components/Porfile";
import { SearchInsues } from "./components/SearchInsues";
import { BlogIssuesContain, AllPostsContain } from "./style";

export function BlogIssues(){
  const {searchReposIssues} = useContext(DataGithubContext)
  return(
  <BlogIssuesContain>
    <Profile />

    <div className="inform-profile">
      <strong>Publicações</strong>
      <span>6 publicações</span>
    </div>
    <SearchInsues />

    <AllPostsContain>
      {searchReposIssues.items.map(repo => {
        return(
          <IssuesPost key={repo.id} issues={repo}/>
        )
      })}
    </AllPostsContain>
  </BlogIssuesContain>
  )
}