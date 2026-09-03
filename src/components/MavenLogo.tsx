import React from 'react';

interface MavenLogoProps {
  variant?: 'icon' | 'full' | 'horizontal';
  className?: string;
  size?: number | string;
  alt?: string;
}

export function MavenLogo({
  variant = 'icon',
  className = '',
  size,
  alt = 'Maven English Logo',
}: MavenLogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size || '100%'}
        height={size || '100%'}
        className={className}
        aria-label={alt}
        role="img"
      >
        <defs>
          <radialGradient id="mlIconBgGlow" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#EEF2F6" />
          </radialGradient>

          <linearGradient id="mlIconBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#E2E8F0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="mlLeftWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="35%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <linearGradient id="mlRightWingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          <linearGradient id="mlCenterLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="mlCenterRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          <filter id="mlIconDropShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.10" />
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0284C7" floodOpacity="0.12" />
          </filter>

          <filter id="mlSparkleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00D2FF" floodOpacity="0.45" />
          </filter>
        </defs>

        <rect x="24" y="24" width="464" height="464" rx="120" fill="url(#mlIconBgGlow)" filter="url(#mlIconDropShadow)" />
        <rect x="24" y="24" width="464" height="464" rx="120" fill="none" stroke="url(#mlIconBorderGrad)" strokeWidth="6" />

        <path d="M 26 144 C 26 78 78 26 144 26 L 368 26 C 434 26 486 78 486 144 C 486 160 450 210 340 210 C 180 210 26 170 26 144 Z" fill="#FFFFFF" opacity="0.5" />

        <g transform="translate(40, 20) scale(2.7)">
          <path d="M 38 122 L 38 56 C 38 46 47 40 56 46 L 80 64 L 80 84 L 56 65 C 54 63 52 65 52 68 L 52 122 Z" fill="url(#mlLeftWingGrad)" />
          <path d="M 122 122 L 122 56 C 122 46 113 40 104 46 L 80 64 L 80 84 L 104 65 C 106 63 108 65 108 68 L 108 122 Z" fill="url(#mlRightWingGrad)" />
          <path d="M 80 64 L 80 106 L 64 68 Z" fill="url(#mlCenterLeftGrad)" opacity="0.95" />
          <path d="M 80 64 L 96 68 L 80 106 Z" fill="url(#mlCenterRightGrad)" />

          <g filter="url(#mlSparkleGlow)">
            <polygon points="80,42 86,52 96,54 88,61 90,71 80,65 70,71 72,61 64,54 74,52" fill="#00D2FF" opacity="0.9" />
            <polygon points="80,45 84,52 91,54 86,59 87,66 80,62 73,66 74,59 69,54 76,52" fill="#FFFFFF" opacity="0.98" />
          </g>
        </g>
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <img
        src="/logo-horizontal.svg"
        alt={alt}
        className={className}
        style={{ width: size, height: 'auto' }}
      />
    );
  }

  return (
    <img
      src="/logo.svg"
      alt={alt}
      className={className}
      style={{ width: size, height: 'auto' }}
    />
  );
}
