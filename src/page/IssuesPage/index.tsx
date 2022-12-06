import { ProfileCard } from "./components/ProfileCard";
import ReactMarkdown from 'react-markdown'
import { IssuesContain } from "./style";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataGithubContext } from "../../Context/ContextProvider";
import remarkgfm from "remark-gfm"
import remarkhtml from "remark-html"
import remarkcodeextra from 'remark-code-extra'


export function IssuesPage(){
  const {numberIssues} = useParams()
  const {searchReposIssues} = useContext(DataGithubContext)

  const issue = searchReposIssues.items.filter(item => item.number === Number(numberIssues))[0]


  return(
    <IssuesContain>
      <ProfileCard issues={issue}/>
      <main>
        <ReactMarkdown 
          children={issue.body} 
          remarkPlugins={[remarkgfm, remarkhtml]}
        />
      </main>
    </IssuesContain>
    )
}