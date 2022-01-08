const settings = {
  colors: {
    primary: '#077FDB',
    secondary: '#156DB0',
    onPrimary: '#F6F6F6',
    background: '#EBEBEB',
    onBackgorund: '#444',
    surface: '#EEF5FC',
    onSurface: '#444',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '16px',
  },
  shadow: {
    sm: '0px 2px 3px #0004',
    md: '0px 4px 4px #0004',
    lg: '0px 4px 6px #000c',
  },
  screens: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
}

export const cssPreSets = {
  panels: {
    surfacePanel: `
        background-color: ${settings.colors.surface};
        color: ${settings.colors.onSurface};
        box-shadow: ${settings.shadow.sm};
        border-radius: ${settings.radius.md};
        padding: 0.5rem;
        transition: 0.2s box-shadow;
        &:hover {
          box-shadow: ${settings.shadow.md};
        }
      `,
    primaryPanel: `
      background-color: ${settings.colors.primary};
      color: ${settings.colors.onPrimary};
      box-shadow: ${settings.shadow.sm};
      border-radius: ${settings.radius.md};
      padding: 0.5rem;
      transition: 0.2s box-shadow;
      &:hover {
        box-shadow: ${settings.shadow.md};
      }
    `,
  },
  forMedia: {
    sm: `@media (min-width: ${settings.screens.sm})`,
    md: `@media (min-width: ${settings.screens.md})`,
    lg: `@media (min-width: ${settings.screens.lg})`,
  },
  hover: {
    onPrimary: `
      &:hover {
        color: ${settings.colors.onPrimary + 'CC'};
        cursor: pointer;
        transition: 0.3s;
      }
    `,
    onSurface: `
      &:hover {
        color: ${settings.colors.primary + 'CC'};
        cursor: pointer;
        transition: 0.3s;
      }
    `,
  },
}

export const theme = { ...settings, ...cssPreSets }

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
