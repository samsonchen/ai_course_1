/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4A017',
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'text-muted': '#999999',
        'bg-page': '#F5F5F5',
        'spicy-red': '#FF4444',
        'veg-green': '#2E7D32',
        'veg-green-bg': '#E8F5E9',
        'meat-brown': '#8B4513',
        'border-color': '#E1E2E5',
        'emoji-bg': '#FFF8E7',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['"Noto Sans TC"', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        pill: '999px',
      },
    },
  },
  plugins: [],
}
