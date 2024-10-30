/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'custom-425': '425px', // Add custom breakpoint at 425px
        },
      },
    },
    plugins: [],
  }