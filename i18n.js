import messages from "./locales"

export default {
  locales: ["en", "pl"],
  defaultLocale: "pl",
  vueI18n: {
    fallbackLocale: "pl",
    messages,
  },
}
