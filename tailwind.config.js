/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/dist/img/wepik-photo-mode-202294-21357.png')",
      },
    },
  },
  plugins: [],
}
