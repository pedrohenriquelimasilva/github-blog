import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ContextProvider } from './Context/ContextProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyles />
      </ContextProvider>
    </ThemeProvider>
  )
}
