/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      screens: {
        sm: "375px",
        md: "600px",
        lg: "905px",
        xl: "1240px",
        "2xl": "1440px"
      },
      colors: {
        red: {
          DEFAULT: "#AF2738"
        }
      }
    }
  },
  plugins: []
}
