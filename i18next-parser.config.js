export default {
  locales: ["en", "ar"],
  defaultLocale: "en",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  output: "src/i18n/locales/$LOCALE.json",
  keySeparator: ".",
  namespaceSeparator: ":",
  sort: true,
  keepRemoved: false
};
