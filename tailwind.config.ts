import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans'", "sans-serif"],
        display: ["'Google Sans'", "'Noto Sans'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#363636",
          dark: "#363636",
        },
        accent: {
          DEFAULT: "#3273dc",
          hover: "#2366d1",
          light: "#eef4fc",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f5f5",
          border: "#dbdbdb",
        },
        text: {
          DEFAULT: "#4a4a4a",
          heading: "#363636",
          muted: "#7a7a7a",
          light: "#b5b5b5",
        },
        tag: {
          red: "#ff3860",
          dark: "#363636",
        },
      },
      maxWidth: {
        desktop: "960px",
        widescreen: "1152px",
      },
      fontSize: {
        "hero-title": ["3rem", { lineHeight: "1.125" }],
        "hero-title-mobile": ["1.75rem", { lineHeight: "1.25" }],
        "section-title": ["2rem", { lineHeight: "1.125" }],
        "subsection": ["1.5rem", { lineHeight: "1.25" }],
        body: ["1rem", { lineHeight: "1.5" }],
        "body-lg": ["1.25rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "3rem",
        "section-lg": "6rem",
      },
      borderRadius: {
        button: "290486px",
        card: "10px",
      },
      boxShadow: {
        button: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
        "button-hover": "0 0.5em 2em -0.125em rgba(10,10,10,.2), 0 0 0 1px rgba(10,10,10,.02)",
        card: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
        "card-hover": "0 0.75em 1.5em -0.125em rgba(10,10,10,.15), 0 0 0 1px rgba(10,10,10,.02)",
      },
    },
  },
  plugins: [],
};

export default config;
