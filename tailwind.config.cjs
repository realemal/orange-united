/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Flyer cream/beige background
        cream: {
          50: '#FDFBF7',
          100: '#F8F4EC',
          200: '#F5F0E6',
          300: '#EDE6D9',
          400: '#E5DCCC',
        },
        // Flyer bold blue
        'flyer-blue': {
          DEFAULT: '#2B4B8C',
          dark: '#1E3A6E',
          light: '#3D5FA0',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'blue-dark': {
          50: '#e6f0f5',
          100: '#b3d1e0',
          200: '#80b2cb',
          300: '#4d93b6',
          400: '#1a74a1',
          500: '#1e3a5f',
          600: '#162d47',
          700: '#0f202f',
          800: '#081317',
          900: '#01060f',
        },
        'blue-fountain': {
          50: '#e6f5ff',
          100: '#b3e0ff',
          200: '#80cbff',
          300: '#4db6ff',
          400: '#1aa1ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
        handwriting: ['Comic Sans MS', 'Chalkboard SE', 'Bradley Hand', 'Brush Script MT', 'cursive'],
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
