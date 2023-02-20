/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppin: "Poppins",
        dmSans: "DM Sans",
      },
      colors: {
        bgColor: "#E4EFFF",
        primary: "#3B82F6",
        primaryLight: "#C6DBFF",
        dark: "#193766",
        muted: "#697B98",
        bgWhite: "#ffffff",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
