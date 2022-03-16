const settings = {
  colors: {
    primary: '#077FDB',
    secondary: '#156DB0',
    background: '#EBEBEB',
    surface: '#EEF5FC',
    onPrimary: '#F6F6F6',
    onSurface: '#666',
    onBackgorund: '#666',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  shadow: {
    sm: '0px 2px 3px #3334',
    md: '0px 4px 4px #3334',
    lg: '0px 4px 4px 2px #3334',
  },
  screens: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
  font: {
    sizes: {
      0: '0.75rem',
      1: '1rem',
      2: '1.25rem',
      3: '1.5rem',
      4: '1.75rem',
      5: '2rem',
      6: '2.25rem',
    },
    title: {
      size: '1.5rem',
      weight: 'bold',
    },
    paragraph: {
      size: '1rem',
      weight: 'normal',
    },
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
