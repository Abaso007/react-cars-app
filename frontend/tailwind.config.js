module.exports = {
<<<<<<< HEAD
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
=======
  purge: {
    enable: true,
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/**.{js,jsx,ts,tsx}",
      "./containers/*.{js,jsx,ts,tsx}",
      "./redux/**/*.{js,ts,jsx,tsx}",
    ],
  },
>>>>>>> d1b97f474d703fb907c7c3a855131d050efff35d
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
