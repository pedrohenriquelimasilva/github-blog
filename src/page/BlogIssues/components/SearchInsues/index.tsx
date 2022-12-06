import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { DataGithubContext } from '../../../../Context/ContextProvider'
import { SearchFormContain } from './style'

const searchInsuesSchema = z.object({
  query: z.string(),
})

type SearchInsuesProps = z.infer<typeof searchInsuesSchema>

export function SearchInsues() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInsuesProps>()

  const { searchQueryInGithub } = useContext(DataGithubContext)

  function submitForm(data: SearchInsuesProps) {
    searchQueryInGithub(data.query)
    reset()
  }
  return (
    <div>
      <SearchFormContain onSubmit={handleSubmit(submitForm)}>
        <input
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </SearchFormContain>
    </div>
  )
}
