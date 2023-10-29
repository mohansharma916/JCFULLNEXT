import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/Trips/TripDetails/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": { min: "300px", max: "574px" },
      xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: "1200px" }, // Desktop smallest.
      // xl: { min: "1259px" }, // Desktop wide.
    },

    extend: {
      backgroundImage: {},
      fontFamily: {
        cursive: ["Island Moments", "sans-serif"],
      }, // You can specify your preferred cursive font here
      backgroundColor: {
        white: "#fff", // You can use a different shade of white if needed
      },
    },
    // backgroundColor: {
    //   body: "bg-white",
    // },
  },

  plugins: [],
};
export default config;
