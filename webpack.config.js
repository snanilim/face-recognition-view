const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const browserConfig = {
  entry: ['@babel/polyfill', './src/Main.js'],
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/, ''),
        },
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/css/[name].css',
    }),
  ],
};


module.exports = browserConfig;
