/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:       '#059669',
        'primary-light':'#34D399',
        'primary-pale': '#A7F3D0',
        'bg-light':    '#F0FDF4',
        'card-border': '#A7F3D0',
        gold:          '#10B981',
        body:          '#374151',
        heading:       '#064E3B',
        muted:         '#6B7280',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
