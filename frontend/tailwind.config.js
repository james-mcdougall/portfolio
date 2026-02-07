/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#0A84FF',
        'apple-blue-hover': '#007AFF',
        'apple-green': '#30D158',
        'surface': '#1c1c1e',
        'surface-highlight': '#2c2c2e',
        'muted': '#8E8E93',
        'border-color': '#38383A'
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(10, 132, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(10, 132, 255, 0.5)' }
        }
      }
    }
  },
  plugins: []
}
