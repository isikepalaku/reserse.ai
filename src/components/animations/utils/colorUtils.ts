import { RGB, ColorStop } from '../types/animation';

export const hexToRgb = (hex: string): RGB => {
  const cleanHex = hex.replace(/[^0-9a-f]/gi, '');
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(cleanHex.slice(0, 6));
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

export const rgbToString = (rgb: RGB, alpha?: string): string => {
  return alpha ? `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})` : `rgb(${rgb.r},${rgb.g},${rgb.b})`;
};

export const interpolateColors = (color1: RGB, color2: RGB, progress: number): RGB => {
  return {
    r: Math.floor(color1.r + (color2.r - color1.r) * progress),
    g: Math.floor(color1.g + (color2.g - color1.g) * progress),
    b: Math.floor(color1.b + (color2.b - color1.b) * progress)
  };
};

export const createGradientStops = (color: RGB, opacity: number): ColorStop[] => {
  return [
    { offset: 0, color: rgbToString(color, (opacity).toFixed(2)) },
    { offset: 0.5, color: rgbToString(color, (opacity * 0.5).toFixed(2)) },
    { offset: 1, color: rgbToString(color, '0') }
  ];
};