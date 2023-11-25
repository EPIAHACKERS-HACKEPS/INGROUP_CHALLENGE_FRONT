module.exports = {
  extends: [
    'standard',
    'standard-with-typescript',
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks"
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts", "vite-env.d.ts"],
}