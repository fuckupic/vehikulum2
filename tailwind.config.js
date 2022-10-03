module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
}
