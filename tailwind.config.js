/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": "1920px",
      sm: "414px",
    },
    colors: {
      "text-accent": "#3A4562",
      "apply-button": "#384564",
      "white-accent": "#fff",
      postedAt: "rgba(56, 65, 93, 0.355988)",
      employmentItemBg: "rgba(161, 177, 219, 0.317343)",
      benefitsBg: "rgba(255, 207, 0, 0.15);",
    },
    fontSize: {
      lg: ["18px", "24px"],
      logo: ["28px", "34px"],
      applayButton: ["12px", "16px"],
      h2: ["24px", "30px"],
      salary: ["20px", "25px"],
      p2: ["16px", "25px"],
    },
    maxWidth: {
      detail: "774px",
    },
    fontFamily: {
      postedAt: ["Roboto", "normal", "Arial", "sans-serif"],
    },
    extend: {
      margin: {
        "39px": "39px",
      },
      width: {
        127: "127px",
      },
      height: {
        52: "52px",
      },
    },
  },
  plugins: [],
};
