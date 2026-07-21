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
          forest: '#08351E',
          surface: '#0C3D22',
          bright: '#5CF08A',
          mint: '#2FE0A6',
          teal: '#0FB5A6',
          tint: '#E6F5EC',
        },
        ink: {
          950: '#0B0D10',
          900: '#14181D',
          500: '#5B626B',
          dim: '#9AA6A0',
          200: '#E4E8EA',
        },
        paper: '#F5F8F6',
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
        'mesh-hero':
          'radial-gradient(1100px 620px at 82% -8%, rgba(92,240,138,.20), transparent 60%), radial-gradient(760px 520px at 8% 18%, rgba(15,181,166,.16), transparent 62%), radial-gradient(1400px 900px at 50% 120%, rgba(8,53,30,.9), transparent 70%), linear-gradient(180deg, #0B0D10, #0C3D22 68%, #08351E)',
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
      boxShadow: {
        glow: '0 0 40px rgba(92, 240, 138, .25)',
      },
    },
  },
  plugins: [],
}
