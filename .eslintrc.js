module.exports = {
  "extends": "standard",
  "plugins": [
      "standard",
      "promise",
      "react",
      "jest"
  ],
  "rules": {
    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "keyword-spacing": ["error", {"before": true, "after": false, "overrides": {"else": {"after": true}, "from": {"after": true}, "import": {"after": true}}}],
    "space-unary-ops": [2, {"words": true, "nonwords": false, "overrides": {"typeof": false}}],
    "react/jsx-uses-vars": [2],
    "jest/no-identical-title": "error"
  },
  "env": {
    "jest/globals": true
  }
};