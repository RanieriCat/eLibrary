module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6'
        }
      ]
    }
  }
};
