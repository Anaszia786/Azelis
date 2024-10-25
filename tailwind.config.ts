const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        zinc: "#26BAAC",
        blue: "#2AA7DF",
        grapes: "#B68DEC",
        yellow: "#F9B418",
        pink: "#D61B72",
        orange: "#F6892A",
        dpink: "#B42688",
        sky: "#2AA7DF",
      },
      boxShadow: {
        custom: "0 1px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
  safelist: [
    "text-zinc",
    "bg-zinc",
    "text-blue",
    "bg-blue",
    "text-grapes",
    "bg-grapes",
    "text-yellow",
    "bg-yellow",
    "text-pink",
    "bg-pink",
    "text-orange",
    "bg-orange",
    "text-dpink",
    "bg-dpink",
    "text-sky",
    "bg-sky",
  ],
};

export default config;
