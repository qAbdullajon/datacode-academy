// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "red-radial":
          "radial-gradient(61.98% 266.53% at 34.31% 47.04%, rgba(158, 35, 35, 0.9) 4.5%, rgba(255, 116, 116, 0.8127) 65.5%, rgba(220, 17, 17, 0.72) 100%)",
      },
    },
  },
  plugins: [],
};
