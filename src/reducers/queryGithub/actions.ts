export enum ActionsSearch {
  Search_Query_In_Github = 'Search_Query_In_Github',
  Search_Init_Project_In_Issues = 'Search_Init_Project_In_Issues',
}

export function searchQueryissue(query: string) {
  return {
    type: ActionsSearch.Search_Query_In_Github,
    payload: { query },
  }
}

export function searchInitProjects() {
  return {
    type: ActionsSearch.Search_Init_Project_In_Issues,
  }
}
