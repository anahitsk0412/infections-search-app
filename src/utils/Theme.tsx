import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#7312f0',
    light: '#c202ac',
    dark: '#0b0413',
  },
  secondary: {
    main: '#44474D',
    dark: '#060606',
    light: '#808080',
    text: '#0b0413',
  },
  common: {
    white: '#ffffff',
    black: '#0b0413',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    body3: true;
    label1: true;
    label2: true;
    label3: true;
  }
}

export const DomainSearchTheme = createTheme({
  palette: palette,
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          borderRadius: '54px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          borderRadius: '54px',
          fontSize: '1rem',
          padding: '0.5rem 2rem',
          fontWeight: 800,
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    subtitle2: {
      fontSize: '16px',
      fontWeight: 600,
      paddingRight: '10px',
    },
  },
});
