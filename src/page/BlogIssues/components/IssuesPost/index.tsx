import { IssuesContain } from "./style";
import {formatDistanceToNow} from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'

interface IssuesPostProps {
  issues:{
    title: string;
    body: string;    
    created_at: string;
  }
}

export function IssuesPost({issues}: IssuesPostProps){
  return (
    <IssuesContain>
      <header>
        <h2>{issues.title}</h2>
        <span>{formatDistanceToNow(new Date(issues.created_at), {addSuffix: true, locale: ptbr})}</span>
      </header>

      <p className="description">
        {issues.body}
      </p>
    </IssuesContain>
  )
}