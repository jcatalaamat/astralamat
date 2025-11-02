// Dual-nature color system for Jordi Amat (Astral Amat) portfolio
// Bridging technical mastery with spiritual depth

export const colors = {
  // Technical Side - Logic, Structure, Code
  tech: {
    primary: {
      cyan: '#06B6D4',      // Tailwind cyan-500
      blue: '#3B82F6',      // Tailwind blue-500
      lightCyan: '#22D3EE', // Tailwind cyan-400
      darkBlue: '#1E40AF',  // Tailwind blue-800
    },
    gradients: {
      main: 'from-cyan-500 to-blue-500',
      light: 'from-cyan-400 to-blue-400',
      dark: 'from-cyan-600 to-blue-600',
      glow: 'from-cyan-500/20 to-blue-500/20',
    }
  },

  // Spiritual Side - Consciousness, Depth, Integration
  spirit: {
    primary: {
      purple: '#A855F7',    // Tailwind purple-500
      indigo: '#6366F1',    // Tailwind indigo-500
      pink: '#EC4899',      // Tailwind pink-500
      violet: '#8B5CF6',    // Tailwind violet-500
    },
    gradients: {
      main: 'from-purple-500 via-indigo-500 to-pink-500',
      light: 'from-purple-400 via-indigo-400 to-pink-400',
      dark: 'from-purple-600 via-indigo-600 to-pink-600',
      glow: 'from-purple-500/20 via-indigo-500/20 to-pink-500/20',
    }
  },

  // Integrated - Where both worlds meet
  integrated: {
    primary: {
      teal: '#14B8A6',      // Tailwind teal-500 (balance point)
      fuchsia: '#D946EF',   // Tailwind fuchsia-500 (creative spark)
    },
    gradients: {
      // Full spectrum - technical to spiritual
      fullSpectrum: 'from-cyan-400 via-purple-400 to-pink-400',
      reverse: 'from-pink-400 via-purple-400 to-cyan-400',

      // Dual identity
      dualNature: 'from-blue-500 via-indigo-500 to-purple-500',

      // Sacred tech
      sacredTech: 'from-cyan-500 via-violet-500 to-pink-500',

      // Consciousness meets code
      codeConsciousness: 'from-blue-400 via-purple-500 to-indigo-600',
    }
  },

  // Blockchain & Emerging Tech
  emerging: {
    gradients: {
      main: 'from-violet-500 via-fuchsia-500 to-pink-500',
      light: 'from-violet-400 via-fuchsia-400 to-pink-400',
      glow: 'from-violet-500/20 via-fuchsia-500/20 to-pink-500/20',
    }
  },

  // Leadership & Consciousness
  leadership: {
    gradients: {
      main: 'from-indigo-500 via-purple-500 to-pink-500',
      light: 'from-indigo-400 via-purple-400 to-pink-400',
      glow: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    }
  },

  // Backgrounds & Surfaces
  surfaces: {
    light: {
      primary: '#FFFFFF',    // White
      secondary: '#F9FAFB',  // Tailwind gray-50
      tertiary: '#F3F4F6',   // Tailwind gray-100
    },
    glass: {
      light: 'bg-black/5 backdrop-blur-xl',
      medium: 'bg-black/10 backdrop-blur-xl',
      dark: 'bg-gray-100/80 backdrop-blur-xl',
      purple: 'bg-purple-100/30 backdrop-blur-xl',
      gradient: 'bg-gradient-to-br from-white/95 to-purple-50/50 backdrop-blur-xl',
    }
  },

  // Text & Content
  text: {
    primary: '#18181B',      // Tailwind zinc-900
    secondary: '#52525B',    // Tailwind zinc-600
    tertiary: '#71717A',     // Tailwind zinc-500
    muted: '#A1A1AA',        // Tailwind zinc-400
  },

  // Borders
  borders: {
    subtle: 'border-black/10',
    medium: 'border-black/20',
    strong: 'border-black/30',
    purple: 'border-purple-500/20',
    purpleMedium: 'border-purple-500/30',
    cyan: 'border-cyan-500/20',
    gradient: 'border-transparent',
  }
};

// Glow effects for interactive elements
export const glows = {
  tech: 'hover:shadow-lg hover:shadow-cyan-500/50',
  spirit: 'hover:shadow-lg hover:shadow-purple-500/50',
  integrated: 'hover:shadow-lg hover:shadow-violet-500/50',
  pink: 'hover:shadow-lg hover:shadow-pink-500/50',
};

// Animation durations for sacred geometry
export const animations = {
  pulse: {
    slow: '7s',
    medium: '9s',
    fast: '11s',
    ultraSlow: '13s',
  },
  transition: {
    instant: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  }
};
