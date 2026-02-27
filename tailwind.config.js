/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3fa',
          100: '#dce4f3',
          200: '#c2cfea',
          300: '#9ab1db',
          400: '#718dc8',
          500: '#4f6eb8',
          600: '#3d56a4',
          700: '#334685',
          800: '#1e2d5a',
          900: '#152040',
          950: '#0d1529',
        },
        brand: {
          blue: '#3B5BDB',
          'blue-light': '#4C6EF5',
          'blue-dark': '#2F4AC2',
          green: '#12B76A',
          'green-dark': '#027A48',
          orange: '#F59E0B',
          red: '#EF4444',
          purple: '#7C3AED',
        },
        shift: {
          work: '#3B5BDB',
          ot: '#7C3AED',
          pto: '#059669',
          sick: '#F59E0B',
          callout: '#EF4444',
          calloff: '#6B7280',
          personal: '#06B6D4',
          open: '#10B981',
          ai: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        phone: '0 40px 80px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)',
        card: '0 2px 8px rgba(0,0,0,0.08)',
        sheet: '0 -4px 24px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        phone: '44px',
        pill: '100px',
      },
    },
  },
  plugins: [],
};
