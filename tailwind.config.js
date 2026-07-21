/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#159A4F',
          600: '#0E7A3E',
          700: '#0A5E30',
          bright: '#3DE08A',
          mint: '#2FE0A6',
          tint: '#E6F5EC',
        },
        ink: {
          900: '#14171C',
          800: '#1B1F26',
          500: '#5B626B',
          200: '#E4E8EA',
        },
        paper: '#F6F9F7',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #159A4F, #2FE0A6)',
        'hero-glow':
          'radial-gradient(600px 340px at 78% 8%, rgba(21,154,79,.28), transparent 70%)',
      },
      maxWidth: {
        container: '1160px',
      },
      fontSize: {
        hero: 'clamp(2.6rem, 6.4vw, 5rem)',
        h2: 'clamp(1.9rem, 3.6vw, 2.9rem)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
