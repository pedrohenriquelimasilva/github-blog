import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

interface DataGithubUsers {
  login: string
  avatar_url: string
  html_url: string
  company: string
  followers: string
  name: string
  bio: string
}

export interface IssuesProps {
  id: string
  number: number
  title: string
  body: string
  html_url: string
  user: {
    login: string
  }
  comments: string
  created_at: string
}

interface DataIssuesProps {
  items: IssuesProps[]
  total_count: number
}

interface DataGithub {
  dataGithub: DataGithubUsers
  searchReposIssues: DataIssuesProps

  searchQueryInGithub: (query: string) => Promise<void>
  searchInitProject: () => Promise<void>
  getSchemaGithub: () => Promise<void>
}

export const DataGithubContext = createContext({} as DataGithub)

interface ContextProviderProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [dataGithub, setDataGithub] = useState<DataGithubUsers>(
    {} as DataGithubUsers,
  )
  const [searchReposIssues, setSearchReposIssues] = useState<DataIssuesProps>(
    {} as DataIssuesProps,
  )

  async function searchQueryInGithub(query: string) {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `${query}repo:pedrohenriquelimasilva/github-blog`,
      },
    })

    setSearchReposIssues({ ...response.data })
  }

  const searchInitProject = useCallback(async () => {
    const response = await api.get(
      `/search/issues?q=repo:pedrohenriquelimasilva/github-blog`,
    )

    setSearchReposIssues({ ...response.data })
  }, [])

  const getSchemaGithub = useCallback(async () => {
    const response = await api.get('/users/pedrohenriquelimasilva')

    setDataGithub({ ...response.data })
  }, [])

  return (
    <DataGithubContext.Provider
      value={{
        dataGithub,
        searchQueryInGithub,
        searchReposIssues,
        searchInitProject,
        getSchemaGithub,
      }}
    >
      {children}
    </DataGithubContext.Provider>
  )
}
