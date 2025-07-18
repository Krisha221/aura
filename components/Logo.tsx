
import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 140 50"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <text
      x="0"
      y="40"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      fontSize="48"
      fontWeight="800"
      letterSpacing="-1"
    >
      AURA
    </text>
  </svg>
);

export default Logo;
