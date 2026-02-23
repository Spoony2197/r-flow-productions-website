/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#660000',
          red: '#990000',
          bright: '#FF3333',
        },
        surface: {
          white: '#FFFFFF',
          cream: '#FAF9F7',
          warm: '#F5F2EF',
          muted: '#F0EDEA',
          border: '#E5E0DB',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#828282',
          400: '#585858',
          500: '#2D2D2D',
          600: '#252525',
          700: '#1c1c1c',
          800: '#121212',
          900: '#090909',
          950: '#030303',
        },
        primary: {
          500: '#990000',
          600: '#800000',
          700: '#660000',
        },
        accent: {
          500: '#FF3333',
          600: '#CC0000',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Archivo Black', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.07)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.10)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
