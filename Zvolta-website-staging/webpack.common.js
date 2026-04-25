const path = require('path');

module.exports = {
  entry: {
    app: './js/custom-cursor.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/custom-cursor.js',
  },
};
