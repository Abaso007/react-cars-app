import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat()

export default [
  // mimic environments
  compat.env({
    es2020: true,
    node: true,
  }),

  // mimic plugins
  compat.plugins("airbnb", "react"),

  // translate an entire config
  compat.config({
    plugins: ["airbnb", "react"],
    extends: "standard",
    env: {
      es2020: true,
      node: true,
    },
    rules: {
      semi: "error",
    },
  }),
]
