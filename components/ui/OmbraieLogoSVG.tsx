"use client";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  light?: boolean;
}

export default function OmbraieLogoSVG({ size = 40, showText = true, className = "", light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <ellipse cx="52" cy="60" rx="22" ry="6" fill="url(#shadowGrad)" opacity="0.5" />
        <circle cx="36" cy="36" r="28" stroke="url(#logoGrad1)" strokeWidth="2.5" strokeDasharray="60 20" strokeDashoffset="10" fill="none" filter="url(#glow)" />
        <polygon points="36,14 54,24 54,44 36,54 18,44 18,24" fill="none" stroke="url(#logoGrad1)" strokeWidth="1.5" opacity="0.5" />
        <polygon points="36,22 48,36 36,50 24,36" fill="url(#logoGrad1)" opacity="0.1" />
        <polygon points="36,22 48,36 36,50 24,36" fill="none" stroke="url(#logoGrad1)" strokeWidth="1.8" filter="url(#glow)" />
        <circle cx="36" cy="36" r="4" fill="url(#logoGrad1)" filter="url(#glow)" />
        <circle cx="36" cy="8" r="2" fill="#c084fc" opacity="0.8" />
        <circle cx="64" cy="36" r="2" fill="#7c3aed" opacity="0.6" />
        <circle cx="8" cy="36" r="1.5" fill="#f59e0b" opacity="0.5" />
      </svg>

      {showText && (
        <svg width={size * 3.2} height={size * 0.55} viewBox="0 0 200 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {light ? (
              <linearGradient id="textGradL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D0D0D" />
                <stop offset="55%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            ) : (
              <linearGradient id="textGradD" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            )}
          </defs>
          <text
            x="0" y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="22"
            letterSpacing="4"
            fill={light ? "url(#textGradL)" : "url(#textGradD)"}
          >
            OMBRAIE
          </text>
          <rect x="0" y="29" width="80" height="1.5" fill="#7c3aed" opacity="0.6" rx="1" />
          <rect x="82" y="29" width="20" height="1.5" fill="#f59e0b" opacity="0.8" rx="1" />
        </svg>
      )}
    </div>
  );
}
