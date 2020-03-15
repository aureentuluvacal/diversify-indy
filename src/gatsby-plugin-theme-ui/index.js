import amsterdamTheme from "gatsby-theme-amsterdam/src/gatsby-plugin-theme-ui"

export default {
  ...amsterdamTheme,
  colors: {
    ...amsterdamTheme.colors,
    tertiary: "#f9f9f9",
    modes: {
      dark: {
        ...amsterdamTheme.colors.modes.dark,
        tertiary: "#222222",
      },
    },
  },
}
