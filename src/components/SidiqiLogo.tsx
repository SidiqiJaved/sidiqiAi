import React from 'react'

interface SidiqiLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function SidiqiLogo({ className = "", size = 'md' }: SidiqiLogoProps) {
  const sizeConfig = {
    sm: { container: "w-8 h-8", font: "text-lg" },
    md: { container: "w-12 h-12", font: "text-xl" },
    lg: { container: "w-16 h-16", font: "text-2xl" },
    xl: { container: "w-20 h-20", font: "text-3xl" }
  }

  const config = sizeConfig[size]

  return (
    <div className={`relative ${config.container} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.2))' }}
      >
        {/* Background glow circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#backgroundGlow)"
          opacity="0.1"
        />
        
        {/* Circuit paths */}
        <path
          d="M20 30 L35 30 L35 45 L50 45"
          stroke="url(#circuitGlow)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <path
          d="M50 55 L65 55 L65 70 L80 70"
          stroke="url(#circuitGlow)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M25 65 L40 65 L40 80"
          stroke="url(#circuitGlow)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Circuit nodes */}
        <circle cx="35" cy="30" r="2" fill="#06b6d4" className="animate-pulse" />
        <circle cx="50" cy="45" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="65" cy="55" r="2" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <circle cx="40" cy="65" r="2" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Letter "S" stylized */}
        <path
          d="M25 25 Q35 20 35 30 Q35 40 45 35 Q55 30 55 40 Q55 50 45 45"
          stroke="url(#letterGlow)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Letter "A" with circuit pattern */}
        <g transform="translate(45, 20)">
          <path
            d="M0 25 L7.5 0 L15 25 M3 18 L12 18"
            stroke="url(#letterGlow)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Circuit pattern inside A */}
          <path
            d="M4 8 L6 10 L8 8 M6 12 L9 15"
            stroke="#06b6d4"
            strokeWidth="0.5"
            opacity="0.8"
            className="animate-pulse"
          />
        </g>

        {/* "I" with binary code effect */}
        <g transform="translate(70, 20)">
          <line
            x1="2.5"
            y1="0"
            x2="2.5"
            y2="25"
            stroke="url(#letterGlow)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Binary code dots */}
          <circle cx="8" cy="5" r="0.8" fill="#06b6d4" opacity="0.6" className="animate-pulse" />
          <circle cx="10" cy="8" r="0.8" fill="#3b82f6" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
          <circle cx="8" cy="11" r="0.8" fill="#06b6d4" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
          <circle cx="10" cy="14" r="0.8" fill="#3b82f6" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
          <circle cx="8" cy="17" r="0.8" fill="#06b6d4" opacity="0.6" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
        </g>

        {/* Connecting neural network lines */}
        <path
          d="M40 35 Q50 30 60 35"
          stroke="url(#neuralGlow)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <defs>
          <linearGradient id="backgroundGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="letterGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="neuralGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}