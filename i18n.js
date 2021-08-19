import messages from "./locales";

export default {
  locales: [
    { code: "en", iso: "en" },
    { code: "pl", iso: "pl" },
  ],
  defaultLocale: "pl",
  vueI18n: {
    fallbackLocale: "pl",
    messages,
  },
};
