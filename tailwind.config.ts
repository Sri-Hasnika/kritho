import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#fbfbe0',
          100: '#f9f9b6',
          200: '#f4f269',
          300: '#e4ea67',
          400: '#cee26b',
          500: '#a8d26d',
          600: '#90c868',
          700: '#82c26e',
          800: '#6dbb6b',
          900: '#5cb270',
          950: '#3c8c58',
        },
        secondary: {
          50: '#f7fdea',
          100: '#eaf6ce',
          200: '#dceeb0',
          300: '#c2dc90',
          400: '#a3c47e',
          500: '#88b36e',
          600: '#6e9b60',
          700: '#577c50',
          800: '#426042',
          900: '#2e4531',
          950: '#1a2a1f',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
}

export default config
