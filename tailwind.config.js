/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vastago: ['var(--font-vastago)'],
        vastagoBold: ["VastagoGrotesk-Bold", "sans-serif"],
        vastagoLight: ["VastagoGrotesk-Light", "sans-serif"],
        sans: ['var(--font-bricolage)'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-left': 'float-left 5s ease-in-out infinite',
        'float-right': 'float-right 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer-fast': 'shimmer 1.5s linear infinite',
        'rotate-glow': 'rotateGlow 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'buzz': 'buzz 1s ease-in-out 3',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatLeft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatRight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rotateGlow: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(10deg) scale(1.1)', opacity: '0.8' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        buzz: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(3deg) scale(1.05)' },
          '50%': { transform: 'rotate(-3deg) scale(1.05)' },
          '75%': { transform: 'rotate(3deg) scale(1.05)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
      },
      utilities: {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden'
        }
      }
    },
  },
  plugins: [],
};
