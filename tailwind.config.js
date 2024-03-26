/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'master-spas-logo': "url('https://masterspascdn.com/img/tabs/ms-sprite.png')",
        'micheal-phelps-logo': "url('https://masterspascdn.com/img/tabs/mpss-sprite.png')",
        'fitness-swim-spas': "url('https://masterspascdn.com/img/tabs/h2x-sprite.png')",
        "micheal-philips-chillygoat": "url('https://masterspascdn.com/img/tabs/goat-sprite.png')"
      }
    },
  },
  plugins: [],
}

