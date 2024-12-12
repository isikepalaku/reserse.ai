import { colors } from '../../../styles/colors';

export const PARTICLE_CONFIG = {
  colors: {
    palette: [
      '#666666',
      '#888888',
      '#AAAAAA',
    ],
    connection: {
      start: '#888888',
      end: '#666666',
      opacity: {
        base: 0.2,
        range: 0.1,
      },
    },
  },
  count: {
    min: 80,
    max: 150,
    density: 0.0003,
  },
  radius: {
    min: 3.5,
    max: 6.5,
    pulse: {
      enabled: true,
      speed: 0.02,
      range: 0.3,
    },
  },
  maxDistance: 200,
  speed: {
    min: 0.15,
    max: 0.4,
  },
  opacity: {
    particle: {
      base: 0.8,
      range: 0.2,
    },
  },
  colorTransition: {
    enabled: true,
    speed: 0.0005,
  },
  responsive: {
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
    },
    scaling: {
      sm: 0.7,
      md: 0.85,
      lg: 1,
    },
  },
} as const;