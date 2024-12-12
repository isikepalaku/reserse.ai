export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface ColorStop {
  offset: number;
  color: string;
}

export interface ParticleProps {
  x: number;
  y: number;
  radius: number;
  velocity: {
    x: number;
    y: number;
  };
}