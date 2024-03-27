/** @type {import("prettier").Config} */

const config = {
  trailingComma: "none",
  tabWidth: 4,
  semi: false,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
