import React, { useEffect, useRef } from 'react';
import { theme } from '../../styles/theme';
import { INDONESIA_MAP_PATHS } from './constants/mapData';

const MapBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawMap = () => {
      ctx.fillStyle = theme.colors.background.DEFAULT;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mapWidth = 1000;
      const mapHeight = 400;
      const scale = Math.min(canvas.width / mapWidth, canvas.height / mapHeight) * 0.8;
      const translateX = (canvas.width - mapWidth * scale) / 2;
      const translateY = (canvas.height - mapHeight * scale) / 2;

      ctx.save();
      ctx.translate(translateX, translateY);
      ctx.scale(scale, scale);

      INDONESIA_MAP_PATHS.forEach(path => {
        const p = new Path2D(path);
        ctx.fillStyle = `${theme.colors.text.primary}08`; // More subtle map
        ctx.strokeStyle = `${theme.colors.text.primary}0A`; // More subtle outline
        ctx.lineWidth = 0.5; // Thinner lines
        ctx.fill(p);
        ctx.stroke(p);
      });

      ctx.restore();
    };

    drawMap();
    window.addEventListener('resize', drawMap);
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', drawMap);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50" // Reduced opacity
      style={{ background: theme.colors.background.DEFAULT }}
    />
  );
};

export default MapBackground;