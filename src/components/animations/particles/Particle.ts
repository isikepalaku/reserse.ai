import { RGB, ParticleProps } from '../types/animation';
import { PARTICLE_CONFIG } from '../config/particleConfig';
import { hexToRgb, interpolateColors, createGradientStops, rgbToString } from '../utils/colorUtils';

export class Particle implements ParticleProps {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  velocity: { x: number; y: number };
  opacity: number;
  pulsePhase: number;
  colorIndex: number;
  colorTransition: number;

  constructor({ x, y, radius, velocity }: ParticleProps) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.baseRadius = radius;
    this.velocity = velocity;
    this.opacity = PARTICLE_CONFIG.opacity.particle.base +
      (Math.random() - 0.5) * PARTICLE_CONFIG.opacity.particle.range;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.colorIndex = Math.floor(Math.random() * PARTICLE_CONFIG.colors.palette.length);
    this.colorTransition = Math.random();
  }

  private getCurrentColor(): RGB {
    const { palette } = PARTICLE_CONFIG.colors;
    const currentIndex = Math.floor(this.colorIndex);
    const nextIndex = (currentIndex + 1) % palette.length;
    const progress = this.colorIndex - currentIndex;

    const current = hexToRgb(palette[currentIndex]);
    const next = hexToRgb(palette[nextIndex]);

    return interpolateColors(current, next, progress);
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (PARTICLE_CONFIG.radius.pulse.enabled) {
      this.pulsePhase += PARTICLE_CONFIG.radius.pulse.speed;
      const pulseFactor = Math.sin(this.pulsePhase) * PARTICLE_CONFIG.radius.pulse.range;
      this.radius = this.baseRadius * (1 + pulseFactor);
    }

    if (PARTICLE_CONFIG.colorTransition.enabled) {
      this.colorIndex = (this.colorIndex + PARTICLE_CONFIG.colorTransition.speed) % PARTICLE_CONFIG.colors.palette.length;
    }

    const color = this.getCurrentColor();
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius * 2
    );

    const gradientStops = createGradientStops(color, this.opacity);
    gradientStops.forEach(stop => {
      gradient.addColorStop(stop.offset, stop.color);
    });

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.draw(ctx);
    
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x * 0.95;
      this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y * 0.95;
      this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
    }

    const jitter = 0.005;
    this.velocity.x += (Math.random() - 0.5) * jitter;
    this.velocity.y += (Math.random() - 0.5) * jitter;

    const maxSpeed = PARTICLE_CONFIG.speed.max;
    const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
    if (speed > maxSpeed) {
      this.velocity.x = (this.velocity.x / speed) * maxSpeed;
      this.velocity.y = (this.velocity.y / speed) * maxSpeed;
    }

    this.x += this.velocity.x * 0.8;
    this.y += this.velocity.y * 0.8;
  }
}