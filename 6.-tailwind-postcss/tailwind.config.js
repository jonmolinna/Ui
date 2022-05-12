module.exports = {
  mode: "jit", // motor jit solo genera clases que utilizas, ya viene por defecto
  // content: ["./public/**/*.{html,js}", "./public/index.html"],
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  // purge: ["./public/**/*.{html,js}", "./public/index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        indigo: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
          dark: "#202e78",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
