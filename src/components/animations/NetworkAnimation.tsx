import React, { useEffect, useRef } from 'react';
import { setupCanvas } from './utils/canvas';
import { createParticles, drawConnections } from './utils/particleUtils';
import { theme } from '../../styles/theme';

const NetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cleanup = setupCanvas(canvas);
    const particles = createParticles(canvas);

    function animate() {
      ctx.fillStyle = `${theme.colors.background.dark}0A`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawConnections(ctx, particles);
      particles.forEach(particle => particle.update(ctx, canvas));
      
      requestAnimationFrame(animate);
    }

    animate();
    return cleanup;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: theme.colors.background.DEFAULT }}
    />
  );
};

export default NetworkAnimation;