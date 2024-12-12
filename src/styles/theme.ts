import { colors } from './colors';

export const theme = {
  colors: {
    primary: {
      DEFAULT: '#003875',
      accent: '#C41E3A',
      dark: '#002855',
      gradient: `linear-gradient(135deg, #003875 0%, #002855 100%)`,
    },
    background: {
      DEFAULT: '#000000',
      light: '#1a1a1a',
      dark: '#000000',
      gradient: `linear-gradient(180deg, #000000 0%, #111111 100%)`,
    },
    accent: {
      DEFAULT: '#C41E3A',
      success: '#003875',
      warning: '#B87D3B',
      error: '#C41E3A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
      muted: '#666666',
    },
    ui: {
      card: `${colors.black.soft}CC`,
      border: `${colors.brand.yellow}15`,
      glow: `0 0 20px ${colors.brand.red}15`,
    },
  },
  animation: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;