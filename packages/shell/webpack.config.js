const { resolve } = require('path');

const app = resolve(__dirname, './src/app');
const browserEntrypoint = resolve(__dirname, './src/browser/main.tsx');
const outDir = resolve(__dirname, './out/browser');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode,
  entry: {
    app: browserEntrypoint
  },
  output: {
    filename: '[name].js',
    path: outDir
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs']
  },
  module: {
    rules: [
      {
        include: /\.tsx?$/,
        use: 'babel-loader',
      }
    ]
  }
};

module.exports = config;