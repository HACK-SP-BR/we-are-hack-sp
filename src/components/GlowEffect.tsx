import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTheme } from '../contexts/ThemeContext';

interface GlowEffectProps {
  children: React.ReactNode;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({ children }) => {
  const { x, y } = useMousePosition();
  const { theme } = useTheme();

  const glowColor = theme === 'dark' 
    ? 'rgba(255,255,255,0.06)'
    : 'rgba(0,0,0,0.04)';

  return (
    <div className="glow-container">
      <div
        className="glow-effect"
        style={{
          background: `radial-gradient(800px circle at ${x}px ${y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
