/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "silk-screen": ["Silkscreen", "cursive"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "lobster-one": ["Lobster", "cursive"],
        "yeseva-one": ["Yeseva One", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "xs-s": "316px",
        "sm-s": "640px",
        // => @media (min-width: 640px) { ... }

        "md-s": "768px",
        // => @media (min-width: 768px) { ... }

        "lg-s": "1024px",
        // => @media (min-width: 1024px) { ... }

        "xl-s": "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        spin: "spin 25s linear infinite",
      },
    },
  },
  plugins: ["macros"],
};
