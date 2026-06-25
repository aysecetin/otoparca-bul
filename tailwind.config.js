/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        steel: "#334155",
        line: "#E5E7EB",
        amber: "#228B55",
        mint: "#228B55",
      },
      boxShadow: {
        panel: "0 18px 55px rgba(17, 24, 39, 0.10)",
      },
    },
  },
  plugins: [],
};
