import { useCallback } from 'react'
import { IssuesProps } from '../../Context/ContextProvider'
import { ActionsSearch } from './actions'
import { produce } from 'immer'
import { api } from '../../lib/api'

export interface DataIssuesProps {
  items: IssuesProps[]
  total_count: number
}

export function searchReducer(stage: DataIssuesProps, action: any) {
  switch (action.type) {
    case ActionsSearch.Search_Init_Project_In_Issues:
      return produce(stage, (draft) => {
        useCallback(async () => {
          const response = await api.get(
            `/search/issues?q=repo:pedrohenriquelimasilva/github-blog`,
          )

          draft.items = response.data.items
          draft.total_count = response.data.total_count
        }, [draft])
      })
    case ActionsSearch.Search_Query_In_Github:
      // finalizar função e testar
      return produce(stage, (draft) => {
        useCallback(async () => {
          const response = await api.get(`/search/issues`, {
            params: {
              q: `${action.payload.query}repo:pedrohenriquelimasilva/github-blog`,
            },
          })

          draft.items = response.data.items
          draft.total_count = response.data.total_count
        }, [draft])
      })
    default:
      return stage
  }
}
