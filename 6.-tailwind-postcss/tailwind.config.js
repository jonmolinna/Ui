// Plugin
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit", // motor jit solo genera clases que utilizas, ya viene por defecto
  // content: ["./public/**/*.{html,js}", "./public/index.html"],
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  // purge: ["./public/**/*.{html,js}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
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
  plugins: [
    plugin(function ({ addUtilities, addComponents, addBase, theme }) {
      const newUtilities = {
        ".scale-1": {
          transform: "scale(1)",
        },
        ".rotate-1": {
          transform: "rotate(1)",
        },
      };

      addUtilities(newUtilities);

      const button = {
        ".btn": {
          padding: "0.5rem 1rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          color: "#fff",
          "&:hover": {
            color: "#000",
          },
        },
      };

      addComponents(button);

      const heading = {
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: "17px" },
        h3: { fontSize: "15px" },
      };

      addBase(heading);
    }),
  ],
  presets: [require("./preset/tailwind.preset")],
};
