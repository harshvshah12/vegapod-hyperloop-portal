/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f05423',
          'orange-glow': '#ff6e3d',
          'orange-dark': '#c83c0e',
          navy: '#0d2446',
          'navy-deep': '#061325',
          'navy-surface': '#0e2950',
          'navy-light': '#183d73',
          void: '#030811',
          cyan: '#00d2ff',
          electric: '#00e5ff'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'warp': 'warp 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(240, 84, 35, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(240, 84, 35, 0.8), 0 0 10px rgba(0, 210, 255, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
