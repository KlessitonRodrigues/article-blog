import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import GlobalStyled from '../styles/globalStyled'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
