module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
      },
    },
    autoprefixer: {},
  },
};
