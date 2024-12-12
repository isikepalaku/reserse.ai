export const setupCanvas = (canvas: HTMLCanvasElement) => {
  const setCanvasSize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);
  
  return () => window.removeEventListener('resize', setCanvasSize);
};