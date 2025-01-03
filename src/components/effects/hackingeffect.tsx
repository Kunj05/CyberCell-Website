'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Type the ref properly

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Matrix rain configuration
    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const matrixArray = matrix.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // Drawing function
    const draw = () => {
      // Black BG with opacity for the fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      // Draw the characters
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 35);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black">
      <canvas ref={canvasRef} className="opacity-20" aria-hidden="true" />
    </div>
  );
}
