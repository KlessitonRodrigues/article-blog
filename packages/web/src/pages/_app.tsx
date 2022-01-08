import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import GlobalStyled from '../styles/globalStyled'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
