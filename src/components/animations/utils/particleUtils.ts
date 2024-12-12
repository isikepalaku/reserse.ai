import { Particle, ParticleProps } from '../particles/Particle';
import { PARTICLE_CONFIG } from '../config/particleConfig';
import { hexToRgb, rgbToString } from './colorUtils';

export const getOptimalParticleCount = (canvas: HTMLCanvasElement): number => {
  const area = canvas.width * canvas.height;
  const baseCount = Math.floor(area * PARTICLE_CONFIG.count.density);
  const count = Math.min(
    Math.max(baseCount, PARTICLE_CONFIG.count.min),
    PARTICLE_CONFIG.count.max
  );

  let scale = 1;
  if (canvas.width < PARTICLE_CONFIG.responsive.breakpoints.sm) {
    scale = PARTICLE_CONFIG.responsive.scaling.sm;
  } else if (canvas.width < PARTICLE_CONFIG.responsive.breakpoints.md) {
    scale = PARTICLE_CONFIG.responsive.scaling.md;
  }

  return Math.floor(count * scale);
};

export const createParticles = (canvas: HTMLCanvasElement): Particle[] => {
  const count = getOptimalParticleCount(canvas);
  
  return Array.from({ length: count }, () => {
    const props: ParticleProps = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: PARTICLE_CONFIG.radius.min + 
        Math.random() * (PARTICLE_CONFIG.radius.max - PARTICLE_CONFIG.radius.min),
      velocity: {
        x: (Math.random() - 0.5) * PARTICLE_CONFIG.speed.max,
        y: (Math.random() - 0.5) * PARTICLE_CONFIG.speed.max,
      },
    };
    return new Particle(props);
  });
};

export const drawConnections = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[]
) => {
  particles.forEach((particle1, i) => {
    particles.slice(i + 1).forEach(particle2 => {
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < PARTICLE_CONFIG.maxDistance) {
        const opacity = (1 - distance / PARTICLE_CONFIG.maxDistance) * 
          PARTICLE_CONFIG.colors.connection.opacity.base;

        const gradient = ctx.createLinearGradient(
          particle1.x, particle1.y,
          particle2.x, particle2.y
        );
        
        const startColor = hexToRgb(PARTICLE_CONFIG.colors.connection.start);
        const endColor = hexToRgb(PARTICLE_CONFIG.colors.connection.end);
        
        gradient.addColorStop(0, rgbToString(startColor, opacity.toFixed(2)));
        gradient.addColorStop(1, rgbToString(endColor, opacity.toFixed(2)));

        ctx.beginPath();
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y);
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }
    });
  });
};