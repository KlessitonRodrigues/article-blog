export const theme = {
  colors: {
    primary: '#235789',
    onPrimary: "#fff",
    background: '#EBEBEB',
    onBackgorund: '#333',
    surface: 'EEF5FC',
    onSurface: '#333',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
