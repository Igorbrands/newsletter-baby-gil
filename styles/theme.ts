import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '10px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    green: {
      ...theme.colors.green,
      500: '#206a5d',
    },
    gray: {
      ...theme.colors.gray,
      400: '#206a5d',
      300: '#f1f1e8',
      600: '#81b214',
      700: '#bfdcae',
      800: '#81b214',
    },
  },
};

export default customTheme;
