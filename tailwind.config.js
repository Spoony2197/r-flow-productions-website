/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c2d6ff',
          300: '#9db7ff',
          400: '#7390ff',
          500: '#4b66fc',
          600: '#3246f2',
          700: '#2934dd',
          800: '#252db3',
          900: '#24308c',
          950: '#171b4d',
        },
        secondary: {
          50: '#f2f7fd',
          100: '#e7eefb',
          200: '#d1dff7',
          300: '#adcaf0',
          400: '#82ade7',
          500: '#5e8dde',
          600: '#4670d2',
          700: '#395dc2',
          800: '#334d9f',
          900: '#2e447e',
          950: '#1f2a4c',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#828282',
          400: '#585858',
          500: '#2e2e2e',
          600: '#252525',
          700: '#1c1c1c',
          800: '#121212',
          900: '#090909',
          950: '#030303',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.15)',
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