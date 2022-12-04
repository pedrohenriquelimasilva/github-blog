import { ProfileCard } from "./components/ProfileCard";
import ReactMarkdown from 'react-markdown'
import { IssuesContain } from "./style";


export function IssuesPage(){
  const markDown = ` 
  # Coffe Delivery - web site
  
  ## 💻 Project
  
  This project was built to support the study of how to develop applications in react, componetização, context and its features. It is applied concepts of components, properties, CRUD, api integration.
  
  ## 🚀 Technologies
  `
    return(
      <IssuesContain>
        <ProfileCard />
      </IssuesContain>
    )
}