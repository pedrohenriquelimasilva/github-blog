import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/api"

interface DataGithubUsers {
  login: string;
  avatar_url: string;
  html_url: string;
  company: string;
  followers: string;
  name: string;
  bio: string;
}

interface DataIssuesProps {
  items:[{
    id: string;
    title: string;
    body: string;
    html_url: string;
    user: {
      login: string;
    }
    comments: string;
    created_at: string;
  }]
}

interface DataGithub {
  dataGithub: DataGithubUsers;
  searchReposIssues:  DataIssuesProps;

  searchQueryInGithub: (query: string) => Promise<void>;
}

export const DataGithubContext = createContext({} as DataGithub)


interface ContextProviderProps{
  children: ReactNode;
}

export function ContextProvider({children}: ContextProviderProps){
  const [dataGithub, setDataGithub] = useState<DataGithubUsers>({} as DataGithubUsers)
  const [searchReposIssues, setSearchReposIssues] = useState<DataIssuesProps>({} as DataIssuesProps)

  async function searchQueryInGithub(query: string){
    const response = await api.get(`/search/issues?q=${query}repo:daltonmenezes/test`)
    console.log(response.data)

    setSearchReposIssues({...response.data})
  }

  async function searchInitProject(){
    const response = await api.get(`/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test`)
    console.log(response.data)

    setSearchReposIssues({...response.data})
  }

  async function getSchemaGithub(){
    const response = await api.get('/users/pedrohenriquelimasilva')
    
    setDataGithub({...response.data})
  }

  useEffect(() => {
    getSchemaGithub()
    searchInitProject()
  }, [])

  return(
    <DataGithubContext.Provider value={{dataGithub, searchQueryInGithub, searchReposIssues}}>
      {children}
    </DataGithubContext.Provider>
  )
}