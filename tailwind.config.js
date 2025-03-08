/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'main':"#0aad0a",
        'gray':"#919eab"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

