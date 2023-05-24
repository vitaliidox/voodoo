module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      display: ['"Space Grotesk"'],
      footer: ['"Space Mono"'],
    },
    fontSize: {
      s: "12px",
      m: "14px",
      l: "16px",
      xl: "20px",
    },
    screens: {
      tab: { max: "870px" },
      mob: { max: "680px" },
      "mob-s": { max: "340px" },
    },
  },
  plugins: [],
};
